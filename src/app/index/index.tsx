import { router } from "expo-router";
import { Alert, ScrollView, Text, View } from "react-native";

import { styles } from "./style"

import { useEffect, useState } from "react";
import { Selected } from "@/components/Selected";
import { Ingredient } from "@/components/Ingredient";
import { services } from "@/services";




export default function Index() {
    const [selected, setSelected] = useState<String[]>([])
    const [ingredients, setIngredients] = useState<IngredientResponse[]>([])

    //verifica se o item esta selecionado
    function handleToggleSelected(value: string) {
        if (selected.includes(value)) {
            return setSelected((state) => state.filter((item) => item !== value))
        }

        setSelected((state) => [...state, value])
        console.log(selected)
    }

    function handleClearSelected(){
        Alert.alert("Limpar", "Deseja limpar tudo?", [
            {text: "Não", style: "cancel"},
            {text: "Sim", onPress: () => setSelected([])}
        ])
    }

    function handleSearch() {
        router.navigate("/recipes/" + selected)
    }

    useEffect(() => {
        services.ingredients.findAll().then(setIngredients)
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"}
                <Text style={styles.subtitle}>os produtos</Text>
            </Text>

            <Text style={styles.message}>Descrubra receitas baseadas nos produtos que você escolheu</Text>

            <ScrollView
                contentContainerStyle={styles.ingredient}
                showsVerticalScrollIndicator={false}
            >
                {ingredients.map((item) => (
                    <Ingredient 
                        key={item.id}
                        name={item.name}
                        image={`${services.storage.imagePath}/${item.image}`}
                        selected={selected.includes(String(item.id))}
                        onPress={() => handleToggleSelected(String(item.id))}
                    />
                ))}
            </ScrollView>
            
            { selected.length > 0 && (
                <Selected
                quantity={selected.length} 
                onClear={handleClearSelected} 
                onSearch={ handleSearch }
            />
            )}
        </View>
    )
}
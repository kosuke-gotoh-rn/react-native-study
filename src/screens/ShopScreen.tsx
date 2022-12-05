import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { getReviews } from "../lib/firebase";
import React, { useContext, useEffect, useState } from "react";
import { Shop } from "../types/shop";
import { getShops } from "../lib/firebase";
import { ShopReviewItem } from "../components/ShopReviewItem";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { ShopDetail } from "../components/ShopDetail";
import { FloatingActionButton } from "../components/FloatingActionButton";
import { ReviewItem } from "../components/ReviewItem";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Shop">;
  route: RouteProp<RootStackParamList, "Shop">;
};

export const ShopScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  const { shop } = route.params;
  // const { reviews, setReviews } = useContext(ReviewsContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    navigation.setOptions({ title: shop.name });
    const fetchReviews = async () => {
      const reviews = await getReviews(shop.id);
      setReviews(reviews);
    };
    fetchReviews();
  }, [shop]);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={<ShopDetail shop={shop} />}
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={(item) => item.id}
      />
      <FloatingActionButton
        iconName="plus"
        onPress={() => navigation.navigate("CreateReview", { shop })}
      ></FloatingActionButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
});

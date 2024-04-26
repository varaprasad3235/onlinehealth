import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 65px;
`;

const Title = styled.h1`
  text-align: center;
`;

const FoodBlogs = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;

const FoodBlog = styled.div`
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  width: 250px;
  text-align: center;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #f2f2f2;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  max-width: 600px;
  text-align: center;
`;

const CloseButton = styled.button`
  margin-top: 10px;
`;

const foods = [
  {
    name: 'Milk',
    image: 'Milk.jpeg',
    description: 'Milk is a nutritious dairy product known for its high calcium content, which is essential for strong bones and teeth. It is also a good source of protein, providing all essential amino acids needed for tissue repair and growth. Additionally, milk is rich in vitamins, including vitamin D for calcium absorption and vitamin A for vision. Milk contains vital minerals like phosphorus, magnesium, and potassium, supporting various bodily functions. Its high water content aids in maintaining proper hydration. The fat content in milk varies depending on the type, from whole milk to skim milk. Lactose, a natural sugar in milk, serves as an energy source.',
  },
  {
    name: 'Almonds',
    image: 'Almonds.jpeg',
    description: 'Almonds are a nutritious tree nut known for their many health benefits. They are a rich source of healthy fats, mainly monounsaturated fats, which are heart-healthy. Almonds are packed with protein, making them an excellent choice for vegetarians and vegans. These nuts are a good source of dietary fiber, aiding in digestion and promoting a feeling of fullness. Almonds are rich in several essential vitamins and minerals, including vitamin E, which acts as a powerful antioxidant, protecting cells from oxidative damage. They also provide a good dose of magnesium, which is important for muscle and nerve function, blood glucose control, and bone health. Almonds are known to have a positive impact on heart health by helping reduce "bad" LDL cholesterol levels and potentially lowering the risk of heart disease. They are a convenient and healthy snack that can aid in weight management. However, its important to consume them in moderation due to their calorie density.'
  },
  {
    name: 'Cashews',
    image: 'Cashews.jpeg',
    description: 'Cashews, commonly known as kaju, are kidney-shaped nuts that offer a range of nutritional benefits. They are a good source of healthy fats, predominantly monounsaturated fats, which can contribute to heart health when consumed in moderation. Cashews are rich in protein, making them a valuable addition to a vegetarian or vegan diet. They also provide a fair amount of dietary fiber, which aids in digestive health and can help with feelings of fullness and satiety. These nuts are packed with essential vitamins and minerals. Cashews are a great source of vitamin K, which plays a role in blood clotting and bone health, as well as essential minerals such as magnesium, which supports muscle and nerve function, and phosphorus, important for strong bones and teeth. They are known for their beneficial impact on heart health, potentially lowering "bad" LDL cholesterol levels and reducing the risk of heart disease. They can be a healthy and satisfying snack option but should be consumed in moderation due to their calorie content.',
  },
  {
    name: 'Fruits',
    image: 'Fruits.jpeg',
    description: 'Fruits are naturally sweet, delicious, and highly nutritious foods that offer a wide range of health benefits. They are rich in vitamins, minerals, fiber, and antioxidants, making them an essential part of a balanced diet. Here\'s a brief overview of the nutritional benefits of fruits: Vitamins: Fruits are abundant sources of essential vitamins, including vitamin C, vitamin A, vitamin K, and various B vitamins. These vitamins play key roles in immune support, skin health, and overall well-being. Minerals: Fruits provide important minerals such as potassium, which is crucial for regulating blood pressure and heart health. Fiber: Fruits are high in dietary fiber, which aids in digestion, helps maintain a healthy weight, and reduces the risk of chronic diseases like heart disease and diabetes. Antioxidants: Many fruits are rich in antioxidants, such as flavonoids and polyphenols, which help protect cells from damage caused by free radicals and may reduce the risk of chronic diseases. Phytochemicals: Fruits contain various phytochemicals, which have been linked to a reduced risk of certain cancers and other health benefits. Natural Sugars: While fruits contain natural sugars, they are also rich in fiber, which slows down the absorption of sugar and prevents blood sugar spikes. Including a variety of fruits in your diet can help promote overall health, boost your immune system, and provide vital nutrients your body needs to function optimally.',
  },
  {
    name: 'Indian Millets',
    image: 'Millets.jpeg',
    description: 'Millets are a group of small-seeded grains that have been grown and consumed for thousands of years. They are highly nutritious and offer several health benefits. Millets are rich in dietary fiber, which supports digestion and helps maintain a feeling of fullness. They are gluten-free and can be a suitable grain for those with gluten intolerance. These grains are a good source of essential minerals such as magnesium, which is important for muscle and nerve function, and phosphorus, which contributes to bone and teeth health. Millets are also rich in antioxidants, including polyphenols, which protect the bodys cells from oxidative stress and may reduce the risk of chronic diseases. They have a low glycemic index, which means they help regulate blood sugar levels and are suitable for people with diabetes. Millets are a good source of protein and provide all essential amino acids needed for tissue repair and growth. They are a valuable addition to a balanced diet.',
  },
  {
    name: 'Vegetables',
    image: 'vegetables.jpeg',
    description: 'Millets are a group of small-seeded grains that have been grown and consumed for thousands of years. They are highly nutritious and offer several health benefits. Millets are rich in dietary fiber, which supports digestion and helps maintain a feeling of fullness. They are gluten-free and can be a suitable grain for those with gluten intolerance. These grains are a good source of essential minerals such as magnesium, which is important for muscle and nerve function, and phosphorus, which contributes to bone and teeth health. Millets are also rich in antioxidants, including polyphenols, which protect the bodys cells from oxidative stress and may reduce the risk of chronic diseases. They have a low glycemic index, which means they help regulate blood sugar levels and are suitable for people with diabetes. Millets are a good source of protein and provide all essential amino acids needed for tissue repair and growth. They are a valuable addition to a balanced diet.',
  },
  {
    name: 'Meat',
    image: 'Meat.jpeg',
    description: 'Millets are a group of small-seeded grains that have been grown and consumed for thousands of years. They are highly nutritious and offer several health benefits. Millets are rich in dietary fiber, which supports digestion and helps maintain a feeling of fullness. They are gluten-free and can be a suitable grain for those with gluten intolerance. These grains are a good source of essential minerals such as magnesium, which is important for muscle and nerve function, and phosphorus, which contributes to bone and teeth health. Millets are also rich in antioxidants, including polyphenols, which protect the bodys cells from oxidative stress and may reduce the risk of chronic diseases. They have a low glycemic index, which means they help regulate blood sugar levels and are suitable for people with diabetes. Millets are a good source of protein and provide all essential amino acids needed for tissue repair and growth. They are a valuable addition to a balanced diet.',
  },
];

function Nutritioninfo() {
  const [selectedFood, setSelectedFood] = useState(null);

  const handleFoodClick = (food) => {
    setSelectedFood(food);
  };

  const closeModal = () => {
    setSelectedFood(null);
  };

  return (
    <Container>
      <Title style={{ fontSize: '30px' }}>Nutritional Information About Specific Foods to EAT for STUDENTS AT THE TIME OF PLACERMENT PREPARATION </Title>

      <FoodBlogs>
        {foods.map((food, index) => (
          <FoodBlog key={index} onClick={() => handleFoodClick(food)}>
            <div>
              <img src={food.image} alt={food.name} />
              <h2>{food.name}</h2>
            </div>
          </FoodBlog>
        ))}
      </FoodBlogs>

      {selectedFood && (
        <Modal>
          <ModalContent>
            <h2>{selectedFood.name}</h2>
            <p>{selectedFood.description}</p>
            <CloseButton onClick={closeModal}>Close</CloseButton>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
}

export default Nutritioninfo;

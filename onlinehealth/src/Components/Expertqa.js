import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    question: "What are some tips for preparation of placements?",
    answer: "A balanced diet includes a variety of foods like fruits, vegetables, whole grains, lean proteins, and healthy fats. Portion control is important, and it's essential to stay hydrated."
  },
  {
    id: 2,
    question: "How to learn DSA?",
    answer: "Losing weight requires a combination of a calorie deficit, regular exercise, and a balanced diet. Consult with a healthcare professional for personalized advice."
  },
  {
    id: 3,
    question: "best resouce to learn DSA?",
    answer: "Proper hydration is vital for various bodily functions, including digestion, circulation, and temperature regulation. It's recommended to drink 8-10 cups of water per day."
  },
  {
    id: 4,
    question: "How is my diet plan designed & personalized for placements?",
    answer: "During the from-filling process, you would be asked some questions including ‘who cooks at your home’, ‘how many meals do you eat outside’, or ‘do you like food or any other cuisine’. So that our nutritionist would be able to make diet charts accordingly while adhering to the restrictions and your preferences."
  },
  {
    id: 5,
    question: "Who are the best nutritionists/dietitian?",
    answer: "World has several good dietitians without a doubt. However, traditional dietitians typically rely on in-person meetings and traditional interventions. Each visit will take place every 1-2 months or more."
  },{
    id: 6,
    question: "How will I receive my diet plans?",
    answer: "To acquire your online diet plan, update your assessment through our Mantra Care application and our specialized dietician will provide you with a food chart that needs to be followed according to the requirement. You can take advises and discuss the diet plan with your dietician via chat or video calls."
  },{
    id: 7,
    question: "What does a Balanced diet means?",
    answer: "A balanced diet supplies nutrition to our body and helps us work effectively. A balanced diet for people should consist of components including 60-70% carbohydrates, 10-12% protein and 20-25% of fats from the total calories."
  },{
    id: 8,
    question: "Who is a dietitian?",
    answer: "A dietitian is a medical expert who provides personalized diet plans and food charts according to your body needs. Your online dietitian will identify your health issue and recommend healthy diets to treat your disease-related malnutrition. He will conduct effective medical nutrition therapy to help you manage your weight and keep health problems at bay."
  },{
    id: 9,
    question: "What is the difference between a dietitian and nutritionist?",
    answer: "Many people use these terms interchangeably, but their educational qualifications and their roles differ from one another. A nutritionist needs to study dietetics in order to become a licensed dietitian. This is mainly because nutritionists plan diets for people to achieve better health through nutritional foods, while dietitians plan and supervise diets for patients with medical problems"
  },{
    id: 10,
    question: "What is an online health and nutrition consultation?",
    answer: "An online health and nutrition consultation is a virtual meeting with a registered dietitian or healthcare professional to discuss your health and dietary needs, set goals, and receive personalized advice and guidance on nutrition and overall well-being."
  },{
    id: 11,
    question: "How do I schedule an online consultation?",
    answer: "You can schedule an online consultation by contacting a registered dietitian or healthcare provider who offers virtual services. They will typically provide instructions on how to book an appointment."
  },{
    id: 12,
    question: "What should I expect during an online consultation?",
    answer: "During the consultation, you will discuss your health history, dietary habits, goals, and any specific concerns. The healthcare professional will provide guidance, answer your questions, and create a personalized nutrition plan."
  },{
    id: 13,
    question: "What are the benefits of online health and nutrition consultations?",
    answer: "Online consultations offer convenience, accessibility, and flexibility. You can receive expert advice from the comfort of your own home, and it's a great option for individuals with busy schedules or limited mobility."
  },{
    id: 14,
    question: "Can online consultations address specific dietary restrictions or conditions?",
    answer: "Yes, healthcare professionals can tailor their advice to accommodate dietary restrictions or medical conditions, such as food allergies, diabetes, or celiac disease."
  },{
    id: 15,
    question: "What is the cost of an online consultation?",
    answer: "he cost varies depending on the healthcare professional and the length of the consultation. Some health insurance plans may cover online consultations, so it's a good idea to check with your provider."
  },{
    id: 16,
    question: "How many sessions will I need for my specific health or nutrition goals?",
    answer: "The number of sessions required varies based on individual goals and needs. Your healthcare professional will provide guidance on the recommended frequency of consultations."
  },{
    id: 17,
    question: "How can I contact my healthcare professional for follow-up questions or concerns after the consultation?",
    answer: "Most healthcare professionals offer post-consultation support through email or messaging platforms. They will provide you with the necessary contact information.Remember that the information provided here is for general guidance, and it's important to consult with a registered dietitian or healthcare professional for personalized advice tailored to your unique health and nutrition needs."
  },
];

const Expertqa = () => {
  const [expandedQuestions, setExpandedQuestions] = useState([]);

  const containerStyle = {
    marginTop: '50px',
    padding: '60px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '0 auto',
  };
  const titleStyle = {
    fontSize: '24px',
    marginTop: '20px',
    textAlign: 'center',
  };

  const questionStyle = {
    marginBottom: '20px',
    backgroundColor: 'white',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  };

  const answerStyle = {
    display: 'block',
  };

  const toggleQuestion = (questionId) => {
    if (expandedQuestions.includes(questionId)) {
      setExpandedQuestions(expandedQuestions.filter(id => id !== questionId));
    } else {
      setExpandedQuestions([...expandedQuestions, questionId]);
    }
  };

  const onSymbolMouseEnter = (questionId) => {
    setExpandedQuestions([questionId]);
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Frequently Asked Questions</h1>
      {questions.map((qna) => (
        <div
          style={questionStyle}
          key={qna.id}
        >
          <div
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <h2 style={{ margin: 0 }}>{qna.question}</h2>
            <span
              onMouseEnter={() => onSymbolMouseEnter(qna.id)}
              onClick={() => toggleQuestion(qna.id)}
              style={{ fontSize: '20px', fontWeight: 'bold', marginLeft: '10px', cursor: 'pointer' }}
            >
              {expandedQuestions.includes(qna.id) ? "-" : "+"}
            </span>
          </div>
          <p style={{ ...answerStyle, display: expandedQuestions.includes(qna.id) ? 'block' : 'none' }}>{qna.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Expertqa;

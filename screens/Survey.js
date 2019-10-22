import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import { Slider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import NumericInput from 'react-native-numeric-input';

//Survey Page
export default class Survey extends React.Component {
  static navigationOptions = {
    title: 'Survey',
  };

  constructor() {
    super();
    const allQuestions = [
      {
        question: 'How is your pain level in your body?',
        image:
          'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjU1-WrkqzlAhVCrp4KHd01BZYQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.sportsinjuryclinic.net%2Fsport-injuries%2Fknee-pain%2Fposterior-knee-pain&psig=AOvVaw1xYeI1zcTYHLz339yyKLdO&ust=1571705755958127',
        answer: 'slider',
      },
      {
        question: 'How many narcotics have you taken?',
        answer: 'numeric',
      },
    ];
    this.state = {
      allQuestions,
    };

  }


  render() {
    const { navigation } = this.props;
    let survey;
    let count = navigation.getParam('count', 0);

    if (count < this.state.allQuestions.length) {
      survey = <SurveyQuestion navigation={navigation} />;
    } else {
      survey = <CompletionScreen navigation={navigation} />;
    }
    return <View style={styles.screen}>{survey}</View>;
  }
}

//Survey Questions
class SurveyQuestion extends React.Component {
  constructor(props) {
    super(props);
    const allQuestions = [
      {
        question: 'How is your pain level in your body?',
        image:
          'https://www.sportsinjuryclinic.net/wp-content/uploads/2019/01/posterior-knee-pain800.jpg',
        answer: 'slider',
      },
      {
        question: 'How many narcotics have you taken?',
        answer: 'numeric',
      },
    ];
    const allAnswers = this.props.navigation.getParam('answers', []);
    this.state = {
      allQuestions,
      allAnswers,
    };

    this.newAnswer = this.newAnswer.bind(this);
  }

  newAnswer(count, answer) {
    if (count >= this.state.allQuestions.length) {
      const newAllAnswers = [
        ...this.state.allAnswers, 
        {"question": this.state.allQuestions[count].question,"response": answer},
      ];
      this.setState({ allAnswers: newAllAnswers });
    } else {
      this.state.allAnswers[count] = {"question": this.state.allQuestions[count].question, "response":answer}
    }
    console.log(count + JSON.stringify(this.state.allAnswers)) //DEBUG
  }

  render() {
    const { navigation } = this.props;
    const { allQuestions, allAnswers } = this.state;
    let newCount = navigation.getParam('count', 0);
    let answer, image;
    if ('image' in allQuestions[newCount]) {
      image = (
        <Image
          style={styles.image}
          source={{ uri: allQuestions[newCount].image }}
        />
      );
    }
    if (allQuestions[newCount].answer == "slider") {
      answer = <View>
        <Slider
          style={{width: 300, height: 50}}
          maximumValue={10}
          step={1}
          thumbTintColor={'black'}
          onSlidingComplete={answer => {this.answer = answer}}
        />
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Icon name="emoji-sad" size={30} color="black" />
          <Icon name="emoji-happy" size={30} color="black" />
        </View>
      </View>
    }
    if (allQuestions[newCount].answer == "numeric"){
      answer =  <NumericInput 
        rounded 
        onChange={answer => {this.answer = answer}}
        textColor='#000000' 
        iconStyle={{ color: 'white' }} 
        minValue = {0}
        rightButtonBackgroundColor='#EA3788' 
        leftButtonBackgroundColor='#E56B70'/>
    }
    return (
      <View style={styles.screen}>
        <Text
          style={[styles.screenText, styles.largeText, { fontWeight: 'bold' }]}>
          {newCount + 1} / {allQuestions.length}
        </Text>
        <View style={styles.screenText}>
          <LargeText>{allQuestions[newCount].question}</LargeText>
          {image}
          {answer}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}>
            <LargeText>Previous</LargeText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              { this.newAnswer(newCount, this.answer); 
                navigation.push('SurveyScreen', { count: newCount + 1 , answers: this.state.allAnswers})}
            }>
            <LargeText>Next</LargeText>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

//Survey Completion
class CompletionScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.screen}>
        <View style={styles.screenText}>
          <LargeText>Congratulations!</LargeText>
          <LargeText>You've done all survey questions for now!</LargeText>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('MainScreen')}>
            <LargeText>Home</LargeText>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function LargeText(props) {
  return <Text style={styles.largeText}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  screenText: {
    //backgroundColor: 'red',
    alignItems: 'center',
    padding: 10,
  },
  buttonContainer: {
    //backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    borderRadius: 2,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    padding: 10,
    width: 120,
  },
  largeText: {
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
});

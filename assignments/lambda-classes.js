// CODE here for your Lambda Classes

/* ********** Person Class - Base ********** */

class Person {
	constructor(att) {
		this.name = att.name;
		this.age = att.age;
		this.location = att.location;
	}

	speak() {
		return `Hello my name is ${this.name}, I am from ${this.location}`;
	}
} // end Person *** Base Class ***



/* ********** Instructor Class - ********** */

class Instructor extends Person{
	constructor(att) {
		super(att)
		this.specialty = att.specialty;
		this.favLanguage = att.favLanguage;
		this.catchPhrase = att.catchPhrase;
	}

	demo(subject) {
		return `Today we are learning about ${subject}`;
	}

	grade(student, subject) {
		return `${student.name} receives a perfect score on ${subject}`;
	}
} // end Instructor *** childOf-Person ***



/* ********** Student Class - ********** */

class Student extends Person {
	constructor(att) {
		super(att)
		this.previousBackground = att.previousBackground;
		this.className = att.className;
		this.favSubjects = att.favSubjects;
	}

	listSubjects() {
		return this.favSubjects;
	}

	PRAssignment(subject ) {
		return `${student.name} has submitted a PR for ${subject}`;
	}

	sprintChallenge(){
		return `${student.name} has begun sprint challenge on ${subject}`;
	} 
} // end Student *** childof-Person ***



/* ********** ProgramManager Class - ********** */

class ProgramManager extends Instructor {
	constructor(att) {
		super(att)
		this.gradClassName = att.gradClassName;
		this.favInstructor = att.favInstructor;
	}

	standup(slackChannel) {
		return `${ProgramManager.name} announces to ${slackChannel}, @channel standy times!​​​​​`;
	}

	debugsCode(student, subject) {
		return `${ProgramManager.name} debugs ${student.name}'s code on ${subject}`
	}
} // end ProgramManger *** childof-Instructor ***


const joey = new Student({
	name: 'Joey Garcia',
	age: 33,
	location: 'Tullahoma, Tn',
	previousBackground: 'IT Specialist',
	className: 'WEB 20',
	favSubjects: ['Javascript', 'HTML', 'CSS']
});

const kate = new Student({
	name: 'Kate Garcia',
	age: 35,
	location: 'Tullahoma, Tn',
	previousBackground: 'Beauty Specialist',
	className: 'LifeCare',
	favSubjects: ['Math', 'Reading', 'YoGa']
});

const drDale = new Instructor({
	name: 'Dr. Dale',
	location: 'Sewanee, Tn',
	age: 55,
	favLanguage: 'C',
	specialty: 'Development',
	catchPhrase: `I'm a Doctor, not a Scientist`
  });

  const williams = new ProgramManager({
	name: 'Sylvia Williams',
	location: 'Alabaster, Al',
	age: 58,
	gradClassName: 'MTSU',
	favInstructor: 'Mrs. Peterson',
	catchPhrase: `To see a Turtle take water`
  });

  const calvin = new Person({
	name: 'Calvin Brazier',
	age: 33,
	location: 'Murfreesboro, Tn',
	// previousBackground: 'IT Specialist',
	// className: 'WEB 20',
	// favSubjects: ['Javascript', 'HTML', 'CSS']
});


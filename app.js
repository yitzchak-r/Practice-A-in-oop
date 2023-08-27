"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class Patient extends Person {
    constructor(firstName, lastName, patientID) {
        super(firstName, lastName);
        this.patientID = patientID;
    }
    patientDetails() {
        return `first name ${this.firstName} last name${this.lastName} patient ID${this.patientID}`;
    }
}
class Doctor extends Person {
    constructor(firstName, lastName, DoctorID, specialization) {
        super(firstName, lastName);
        this.DoctorID = DoctorID;
        this.specialization = specialization;
    }
    DoctorDetails() {
        return `first name ${this.firstName} last name${this.lastName} doctor ID${this.DoctorID} specialization${this.specialization}`;
    }
}
class Appointment {
    constructor(patient, doctor, date, time) {
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.time = time;
    }
    detailsAppointment() {
        return `Dear customer, this is a reminder for an appointment that corresponds to ${this.patient} for Dr. ${this.doctor} on ${this.date} ${this.time}. For more details, you can contact the website or the application in a healthy health blessing`;
    }
}
class Hospital {
    constructor(hospitalName) {
        this.hospitalName = hospitalName;
        this.patient = [];
        this.doctor = [];
        this.Appointment = [];
    }
    addPatient(NewPatient) {
        return this.patient.push(NewPatient);
    }
    addDoctor(newDoctor) {
        return this.doctor.push(newDoctor);
    }
    addAppointment(newAppointment) {
        return this.Appointment.push(newAppointment);
    }
    ViewAllTeachings() {
        return this.Appointment;
    }
    ShowAllOrdersDoctorsID(idOfDoctor) {
        const filteringByDoctor = this.Appointment.find((app) => app.doctor.DoctorID === idOfDoctor);
        return filteringByDoctor;
    }
    ShowAllOrdersPatientID(idOfPatient) {
        const filteringByPatient = this.Appointment.find((app) => app.patient.patientID === idOfPatient);
        return filteringByPatient;
    }
    ShowAllOrdersDate(ChokeDate) {
        const filteringByDate = this.Appointment.find((app) => app.date === ChokeDate);
        return filteringByDate;
    }
}
const myDoctor1 = new Doctor("yitzchak1", "rosenhan1", 1, "eves1");
const myDoctor2 = new Doctor("yitzchak2", "rosenhan2", 2, "eves2");
const myDoctor3 = new Doctor("yitzchak3", "rosenhan3", 3, "eves3");
const myDoctor4 = new Doctor("yitzchak4", "rosenhan4", 4, "eves4");
const myDoctor5 = new Doctor("yitzchak5", "rosenhan5", 5, "eves5");
const myPatient1 = new Patient("meir1", "asolin1", 1);
const myPatient2 = new Patient("meir2", "asolin2", 2);
const myPatient3 = new Patient("meir3", "asolin3", 3);
const myPatient4 = new Patient("meir4", "asolin4", 4);
const myPatient5 = new Patient("meir5", "asolin5", 5);
const myAppointment1 = new Appointment(myPatient1, myDoctor1, "27/08/23", "14:00");
const myAppointment2 = new Appointment(myPatient2, myDoctor2, "28/08/23", "13:00");
const myAppointment3 = new Appointment(myPatient3, myDoctor3, "29/08/23", "12:00");
const myAppointment4 = new Appointment(myPatient4, myDoctor4, "27/08/23", "15:00");
const myAppointment5 = new Appointment(myPatient5, myDoctor5, "30/08/23", "11:00");
const myHospital = new Hospital("hadasa");
myHospital.addAppointment(myAppointment1);
myHospital.addAppointment(myAppointment2);
myHospital.addAppointment(myAppointment3);
myHospital.addAppointment(myAppointment4);
myHospital.addAppointment(myAppointment5);
const showAllAppointment = myHospital.ViewAllTeachings();
console.log(showAllAppointment);
const showAppointmentByDoctorID = myHospital.ShowAllOrdersDoctorsID(22);
console.log(showAppointmentByDoctorID);
const showAppointmentByPatientID = myHospital.ShowAllOrdersPatientID(5);
console.log(showAppointmentByPatientID);
const toDayAppointment = myHospital.ShowAllOrdersDate("27/08/23");
console.log(toDayAppointment);

## Introduction
![image](https://user-images.githubusercontent.com/68949544/230344624-4ee1013e-14e0-47ea-aa35-5954fb64bb16.png)


The college event management app is a software application that enables event managers, organizers, and attendees to easily plan, organize, and manage events on the college campus. The application will be designed to work on both iOS and Android mobile devices and will provide users with a wide range of features to help manage events effectively.

## Functional Requirements

The following are the functional requirements for the college event management app:

## User Management

The application should allow users to log in, and manage their profiles. Users should be able to view and manage their personal information, including contact information, preferences, and notifications.

## Event Creation and Management

The application should allow event managers and organizers to create and manage events. They should be able to set event details such as date, time, location, and description. They should also be able to create tickets, set ticket prices, and manage ticket sales.

## Event Promotion and Marketing

The application should allow event managers and organizers to promote and market their events to potential attendees. They should be able to create and send email invitations, share events on social media, and run targeted marketing campaigns.

## Event Registration and Ticket Sales

The application should allow attendees to register for events, purchase tickets, and manage their ticket orders. Attendees should be able to view event details, such as date, time, location, and description. They should also be able to view available tickets, select the number of tickets they want, and make payments.

## **Event Check-In and Attendance Tracking**

The application should allow event managers and organizers to check-in attendees and track their attendance. They should be able to use the application to scan barcodes on tickets, verify ticket validity, and mark attendees as present.

## Feedback and Rating System

The application should allow attendees to provide feedback and ratings for events. This feature will help event managers and organizers improve future events and give attendees a voice.

## Non-Functional Requirements

The following are the non-functional requirements for the college event management app:

## Security and Privacy

The application should provide strong security measures to protect user data and transactions. It should use encryption, secure authentication, and secure storage to ensure data privacy and integrity.

## Performance and Scalability

The application should be designed to handle high traffic volumes and support a large number of users. It should be scalable and able to handle increasing user demand.

## Usability and User Experience

The application should have a user-friendly and intuitive interface that is easy to navigate. It should provide clear instructions and feedback to users and be accessible to users with disabilities.

### Assumptions and Constraints

The following are the assumptions and constraints for the college event management app:

### Mobile Platforms

The web application will be developed for both iOS and Android mobile devices.

**Internet Connectivity**
The application requires an internet connection to function correctly.

**Payment Gateway Integration**
The application will integrate with a payment gateway to process payments for event tickets.

The college event management app will provide a comprehensive platform for event managers, organizers, and attendees to plan, organize, and manage events on the college campus. The application will be designed to meet the functional and non-functional requirements outlined in this SRS, and it will help streamline event planning and execution.

# Project Evaluation metrics

## Database

MongoDB is a source-available cross-platform document-oriented database program.
Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional
schemas.

## Tech Stack

- React and Next.js - Frontend
- Vercel - Deployment
- Mongodb - Application Database
- Razorpay - Payment gateway
- Cloudinary - Media storage
- Okta - Authorization server

## Database
![Untitled (1)](https://user-images.githubusercontent.com/68949544/225380574-6812938e-9e36-411e-b170-c8ed3f59ee5f.png)

## DFD
![image](https://user-images.githubusercontent.com/68949544/225380812-c1d8f070-339e-4e38-90fb-52fd50940df5.png)

## Environment Variables
``
NEXT_PUBLIC_MONGOUSERNAME=MONGODB_USER_NAME
NEXT_PUBLIC_MONGOPASSWORD=MONGODB_DATABASE_PASSWORD
NEXT_PUBLIC_STORAGE_URL=CLOUDINARY_API_URL
NEXT_PUBLIC_STORAGE_PRESET=CLOUDINARY_STORAGE_PRESET
NEXT_PUBLIC_OKTA_CLIENT_ID=OKTA_APP_CLIENT_ID
NEXT_PUBLIC_OKTA_CLIENT_SECRET=OKTA_APP_CLIENT_SECRET
NEXT_PUBLIC_OKTA_ISSUER=OKTA_APP_CLIENT_ISSUER
NEXTAUTH_URL=APP_BASE_URL
NEXT_PUBLIC_PAYMENT_KEY=RAZOR_PAY_API_KEY
NEXT_PUBLIC_PAYMENT_SECRET=RAZOR_PAY_API_SECRET
``

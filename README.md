# Nexas
## PeerMe 

The web application facilitates connecting Engineers. The application performs the following functions:

1. Perform algorithmic matching to suggest user connections based on their technical profiles. 
2. The users can filter profiles, discover open projects and form collaboration groups

The idea of the project is to develop a web-based application (NEXAS) that would facilitate connecting and collaborating between software engineers. The application would perform algorithmic matching to suggest user connections based on their technical profiles and interests. The users can find recommended connections based on programming language, domain, experience, discover open projects, and form collaboration groups. Using this application will enable users to connect with peers having similar interests, thereby creating a community network tailored exclusively for software engineers.

## Team Description
| Name                                                       | GitHub ID      | VT PID     |
| ---------------------------------------------------------  | -------------- | ---------- |
| [Sadath Ullah Khan Mohammed](https://github.com/sadathkhn4)| sadathkhn4     | msadath    |
| [Nayaab Azim](https://github.com/Nayaab704)                | Nayaab704      | Nayaab     |
| [Evan Phaupe](https://github.com/EvanPhaup)                | EvanPhaup      | phaupe     |
| [Adeyemi Aina](https://github.com/babz007)                 | babz007        | ainababs0  |



## Prerequisites
Before you can run this application, you'll need to have the following installed:

1. Node.js
2. MongoDB
3. Jest


Getting Started
1. Clone the repository to your local machine using: `git clone https://github.com/Nayaab704/Nexas`
2. Install the dependencies by running the following command: npm install
3. Start the Node.js server by running the following command: node start.js
4. you can use postman to test the Database

e.g
http://localhost:8000/signup

Json
{
  "username": "johndoe",
  "password": "mypassword",
  "languages": ["Java"],
  "domain": "back-end",
  "experience": "1-3"
}


4. Run the test for the controllers (tesing the schema): npm run test or npm test




additional information: User Groups schema

- user:  reference to the User model. It stores the ObjectId of a user in the User collection. It is a required field.
- group: This field is a reference to the Group model. It stores the ObjectId of a group in the Group collection. It is also a required field.
- role: This field is a string that can have one of two possible values: 'admin' or 'member'. It represents the user's role within the group. It is a required field.

## Payout Simulation App ##
### 📌 Overview ###
This project is a simulation of a payout application that allows users to:

Make payments;

Simulate payment success or failure;

Edit failed payments;

View all payments with detailed information;

Store and retrieve data from a PostgreSQL database via API endpoints;

### 🚀 Technologies Used ### 
This project is built using the following technologies:

Next.js for for building the user interface, rendering and routing.

Material UI (MUI) for styling and UI components.

Axios for making API requests.

PostgreSQL for the database.

dotenv for managing environment variables.

date-fns for date manipulation utilities.

### 🔧 Installation & Setup ### 
Prerequisites:

1)Node.js installed

2)PostgreSQL database set up

Steps to Install and Run:

1)git clone https://github.com/Mateus1rosengarten/PayoutStructure-.git

2)cd payoutcrud

3)npm install

4)npm run dev

### 📡 Folder Structure  ### 
``` │
├── app/
│   └── api/
│       └── payments/
│           └── route.ts        # API routes for payments
│
├── components/
│   ├── Modal/                  # Modal components
│   ├── Table/                  # Table components
│   └── ui/                     # Additional UI reusablecomponents (buttons, inputs, etc.)
│
├── context/
│   ├── createPaymentProvider.ts # Context for creating payments
│   └── editPaymentProvider.ts   # Context for editing payments
│
├── server/
│   ├── controllers/            # Business logic for handling requests
│   ├── models/                 # Database models
│   └── dbConnection.ts         # Database connection setup
│
└── utils/
    ├── customStyles.ts         # Custom styles for components
    ├── types.ts               # TypeScript types used across the app
    ├── variables.ts           # Common variables and constants
    └── format.ts              # Helper functions for formatting data
```


### 📡 API Endpoints ### 
Create Payment
POST /api/payments Creates a new payment record.

Get All Payments
GET /api/payments Retrieves all payments with information.

Get Payment by ID
GET /api/payments/:protocol Fetches a single payment by its ID and show detailed informaton.

Update Payment
PUT /api/payments Updates a payment record (useful for editing failed payments)

### 👨‍💻 Author ###
Mateus Rosengarten

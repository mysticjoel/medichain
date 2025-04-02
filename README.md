# MediChain - Blockchain-based Healthcare Management System

MediChain is a decentralized healthcare management system built on the Ethereum blockchain. It provides a secure and transparent platform for managing patient records, doctor registrations, medical appointments, and medicine inventory.

## Team Members

- Joel Joseph
- Divya Devaraj
- Aravind C B
- Aatlee V Varghese

## Features

- **Decentralized Medical Records**: Secure storage and management of patient medical history
- **Doctor Registration & Verification**: Streamlined process for doctor onboarding and verification
- **Appointment Management**: Easy scheduling and tracking of medical appointments
- **Prescription System**: Digital prescription management and verification
- **Medicine Inventory**: Track and manage medicine inventory on the blockchain
- **Role-based Access Control**: Different access levels for patients, doctors, and administrators
- **AI-powered Assistance**: Integrated with Google's Gemini AI for intelligent healthcare assistance

## Tech Stack

- **Frontend**: Next.js, React
- **Blockchain**: Ethereum (Holesky Testnet)
- **Smart Contracts**: Solidity
- **Storage**: IPFS via Pinata
- **Authentication**: Web3Modal
- **AI Integration**: Google Generative AI (Gemini)

## Prerequisites

- Node.js (v12 or higher)
- MetaMask wallet
- Git

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd medichain
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory with the following variables:
```env
NEXT_PUBLIC_HEALTH_CARE=[contract-address]
NEXT_PUBLIC_GEMINI_API_KEY=[your-gemini-api-key]
NEXT_PUBLIC_ADMIN_ADDRESS=[admin-wallet-address]
NEXT_PUBLIC_PINATA_API_KEY=[your-pinata-api-key]
NEXT_PUBLIC_PINATA_SECRET_KEY=[your-pinata-secret-key]
```

## Running the Project

1. Start the development server:
```bash
npm run dev
```

2. Deploy smart contracts (Holesky testnet):
```bash
npm run deploy
```

3. Deploy smart contracts (Local network):
```bash
npm run deploy-local
```

4. Start local Hardhat node:
```bash
npm run node
```

## Project Structure

```
medichain/
├── components/          # React components
├── contracts/          # Solidity smart contracts
├── context/           # React context and constants
├── pages/             # Next.js pages
├── public/            # Static assets
├── scripts/           # Deployment scripts
├── styles/            # SCSS styles
└── test/             # Smart contract tests
```

## User Types

1. **Patients**
   - Register and manage medical records
   - Book appointments
   - View prescriptions
   - Purchase medicines

2. **Doctors**
   - Manage patient appointments
   - Write prescriptions
   - Update patient records
   - View medical histories

3. **Admin**
   - Verify doctors
   - Manage medicine inventory
   - System oversight

## Smart Contract Details

- Network: Holesky Testnet
- Contract Address: `0x4cB6Ba5EDABE50E6b1B96b049d2B8EA4932Fc3d8`
- Solidity Version: 0.8.17

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Ethereum Development Community
- OpenZeppelin for smart contract libraries
- Google Generative AI team
- IPFS and Pinata for decentralized storage
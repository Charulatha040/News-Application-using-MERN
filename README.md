                                      News-Application-using-MERN  Overview
The News Application is a web-based platform that allows users to read the latest news articles from various sources. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), this application provides a seamless and responsive user experience.

Features:
User Authentication: Secure login and registration using JWT (JSON Web Tokens).
News Aggregation: Fetches news articles from multiple sources using news APIs.
Responsive Design: Optimized for both desktop and mobile devices.
Search Functionality: Allows users to search for news articles based on keywords.
Category Filtering: Users can filter news by categories such as Technology, Sports, Business, etc.
Bookmarking: Users can bookmark their favorite articles for later reading.


Technologies Used
Frontend:
React.js for building the user interface
Redux for state management
Axios for making API requests

Backend:
Node.js with Express.js for building the API
MongoDB for database management


Authentication:
JWT (JSON Web Tokens) for secure authentication


News API:
Integrated with various news APIs to fetch the latest news articles
Installation


Clone the repository:
git clone https://github.com/Charulatha040/News-Application-using-MERN.git
Navigate to the project directory:

cd News-Application-using-MERN


Install dependencies:
bash
npm install
cd client
npm install
Set up environment variables: Create a .env file in the root directory and add the following variables:


Code
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NEWS_API_KEY=your_news_api_key
Run the application:
npm run dev


Usage
Register: Create a new account to access the application.
Login: Use your credentials to log in.
Browse News: Explore the latest news articles from various categories.
Search: Use the search bar to find articles based on keywords.
Bookmark: Save articles to read later.

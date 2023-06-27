# NoSQL: Social Network API

This project is a fully functional API for a social network web application. It has been developed using **Express.js** for routing, **MongoDB** as the NoSQL database, and **Mongoose** as the ODM (Object Data Modeling) tool. The API allows users to share their thoughts, react to friends' thoughts, and create a friend list.

## Features

- **User Management**: Users can be created, updated, and deleted. Each user has a unique username and email. They can also have a list of thoughts and friends.
- **Thought Management**: Users can create thoughts, update them, and delete them. Thoughts can have a maximum of 280 characters and are associated with the user who created them. Reactions (replies) can be added and deleted for each thought.
- **Friendship Management**: Users can add and remove friends from their friend list. Friendship is based on the user's `_id` value.
- **Data Retrieval**: The API provides various GET routes to retrieve data. Users can be fetched individually or all at once. Thoughts can also be retrieved individually or all at once. The data is returned in a formatted JSON format.

## Technologies Used

The following technologies were used to develop the project:

- **Express.js**: A popular web application framework for Node.js used for routing and handling API requests.
- **MongoDB**: A NoSQL database that provides scalability and flexibility for handling large amounts of unstructured data.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js that simplifies working with MongoDB and provides schema-based validation and modeling.

## Future Enhancements

While the project is already complete, there are several potential enhancements that can be made to further improve the social network API:

- **Authentication and Authorization**: Implement user authentication and authorization mechanisms to secure the API and protect user data.
- **Pagination**: Implement pagination for retrieving large amounts of data to improve performance and user experience.
- **Search Functionality**: Add search capabilities to allow users to search for specific thoughts, users, or keywords within the social network.
- **User Profiles**: Enhance user profiles to include additional information such as profile pictures, biographies, and social media links.
- **Notifications**: Implement a notification system to notify users about new reactions, friend requests, or other relevant activities.
- **Performance Optimization**: Continuously optimize the API for improved performance and scalability, considering indexes, caching mechanisms, and database query optimizations.

Feel free to explore and expand on these ideas to enhance the functionality of the social network API.

## Acknowledgments

Special thanks to the developers and maintainers of **Express.js**, **MongoDB**, and **Mongoose** for providing the tools and technologies used in this project. Their contributions to the open-source community are greatly appreciated.

---

**Walkthrough Video**

Click [here](https://drive.google.com/file/d/1xcaudF-QUGjTcSi7zRTCZeRXP9Bswbpx/view) to watch the walkthrough video that demonstrates the functionality of the completed API. The video showcases the usage of different routes, including creating users and thoughts, updating and deleting data, and managing friendships and reactions.



<video>
  <source src="https://drive.google.com/file/d/1xcaudF-QUGjTcSi7zRTCZeRXP9Bswbpx/view" type="video/webm">
  <!-- Add additional <source> tags for other supported video formats -->
</video> 
# SonoCode - Problem Admin Service

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

This microservice is the dedicated backend for managing all CRUD (Create, Read, Update, Delete) operations for the coding problems on the SonoCode platform. It serves as the single source of truth for problem data, including descriptions, test cases, and code stubs.

---

##  Core Responsibilities

-   **RESTful API:** Provides a clean, well-structured RESTful API for managing coding problems.
-   **Data Modeling:** Defines and enforces a strict schema for problem data using Mongoose, ensuring data integrity for test cases, code stubs, and problem metadata.
-   **Standalone Service:** Operates independently of other services, interacting with its own dedicated MongoDB collection. This follows a database-per-service pattern, a key principle of microservice design.

---

## 📝 API Endpoints

This service exposes the following endpoints to manage problems.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/v1/problems` | Creates a new coding problem. |
| `GET` | `/api/v1/problems` | Retrieves a list of all problems. |
| `GET` | `/api/v1/problems/:id` | Fetches a single problem by its unique ID. |
| `PATCH` | `/api/v1/problems/:id` | Updates an existing problem's details. |
| `DELETE`| `/api/v1/problems/:id` | Deletes a problem from the database. |

---

## 💡 System Design Pointers

-   **Single Responsibility Principle (SRP):** This service adheres strictly to SRP. Its only concern is the lifecycle of problem data. It knows nothing about users, submissions, or evaluation, which makes it highly cohesive and loosely coupled from the rest of the system.
-   **Database per Service:** This service owns its own database schema and is the only service that communicates directly with the `problems` collection. This encapsulation prevents unintended side effects and allows the data layer to be scaled and modified independently.
-   **Synchronous Communication for Core Data:** Unlike other parts of the platform that use message queues, this service provides a synchronous REST API. This is an intentional design choice, as services like the `Submission Service` require immediate, request-response access to problem data (e.g., test cases) before they can proceed with their workflow.
-   **Stateless Architecture:** The service is stateless. Each API request contains all the information necessary to process it, and no session state is stored on the server. This is critical for horizontal scalability, allowing multiple instances of this service to run behind a load balancer without issue.

---

## ✨ Advanced Backend Concepts Implemented

This service demonstrates several key backend engineering practices:

-   **Standardized API Responses:** The service uses a custom `ApiResponse` utility class to ensure that all successful responses sent to the client follow a consistent and predictable JSON structure (e.g., `{ statusCode, data, message, success }`). This greatly simplifies client-side development and debugging.
-   **Centralized Error Handling:** A custom `ApiError` class is used to handle all operational errors. This approach standardizes error responses, provides clear messages, and ensures that the correct HTTP status codes are always returned.
-   **Schema and Data Modeling:** By leveraging Mongoose schemas (`problem.model.js`), the service enforces strict data integrity at the application layer *before* data hits the database. This includes validation for required fields and the structure of nested objects like `testCases`.
-   **Separation of Concerns:** The codebase is structured logically into `routes`, `controllers`, `models`, and `utils`. This clear separation makes the service highly maintainable, scalable, and easy to test.


# David's DevOps Adventure

Welcome to my DevOps Adventure! This React-based front-end application serves as the backbone of my DevOps portfolio, showcasing my skills and experience in the world of DevOps. With a sleek and intuitive user interface, this app helps potential employers and collaborators get a better sense of my expertise and achievements.

## Technologies Used

- [Vite](https://vitejs.dev/) for a fast and efficient development experience.
- [React](https://reactjs.org/) for a modern and responsive user interface.
- [SWC](https://swc.rs/) for fast and low-level JavaScript optimization.
- [Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/) for hosting the application in both test and production environments.
- [GitHub Actions](https://docs.github.com/en/actions) for continuous integration and deployment to the test and prod environments.

## Application Workflow

The repository consists of two branches:

- **main**: This branch serves as the production-ready front end.
- **test**: This branch is used as the development/test/staging environment.

The workflow I follow for making changes to the application:

1. Create a new branch for the feature or fix.
2. Make the necessary changes locally and test them.
3. Once satisfied with the results, push the changes to the **test** branch.
4. A GitHub Actions workflow is triggered, deploying the changes to the test environment.
   - The test environment is hosted on Azure Static Web Apps, specifically on the app named **stapp-frontend-adventure-test-centralus-01**.
   - The live test site can be accessed at: [https://brave-bay-07994b310.3.azurestaticapps.net](https://brave-bay-07994b310.3.azurestaticapps.net)
5. If the changes on the live test site are satisfactory, merge the **test** branch into the **main** branch.
6. Another GitHub Actions workflow is triggered, deploying the changes to the production environment.
   - The production environment is hosted on Azure Static Web Apps, specifically on the app named **stapp-frontend-adventure-prod-centralus-01**.
   - The live website can be accessed at: [https://lemon-mushroom-0f66cb310.3.azurestaticapps.net](https://lemon-mushroom-0f66cb310.3.azurestaticapps.net)

**Note:** The deployment with GitHub Actions relies on a deployment token stored as a repository secret.

## Future Enhancements

- Purchase a domain name for the production site and integrate it.
- Explore containerization options, such as Docker, and deploy the application to Azure App Service.

## Running the Application Locally

To run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Open a terminal or command prompt and navigate to the project's root directory.
3. Run the following commands:
   - `npm install` to install the dependencies.
   - `npm run dev` to start the development server.
4. Open your web browser and visit [http://localhost:5173](http://localhost:5173) to access the application.

Enjoy exploring my DevOps Adventure!

## About Me

I am a skilled DevOps engineer and full stack developer with 3 years of experience in the industry. I have worked on a wide range of projects, from small-scale startups to large enterprise organizations, and have a proven track record of delivering high-quality, reliable solutions. With my DevOps Adventure, you can get a firsthand look at my skills and experience, and see why I am the right candidate for your next DevOps project.

Thank you for taking the time to check out my DevOps Adventure! I hope you enjoy using the app as much as I enjoyed building it.

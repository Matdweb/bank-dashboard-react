# Bank Dashboard 

This is a [vite.js](https://vitejs.dev/) project bootstrapped with [`npm create vite@latest`](https://vitejs.dev/guide/). This application is a solution for a dashboard that displays and manages all kinds of information from a bank's user!
This is an interface designed by myself based on this pinterest design [Banking Dashboard Design](https://www.pinterest.es/pin/1106900414638219342/) by Rakib Kowshar.

## Demo
See here deployed application: [bank-dashboard-react](https://bank-dashboard-react.netlify.app/);

## Getting Started

First, run the development server:

```
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

You can start editing the page by modifying `src/App.jsx`.

## More about this application

This app was developed using [React](https://react.dev/) which is a JavaScript framework (you can learn more about js frameworks [here](https://hackr.io/blog/best-javascript-frameworks)). For the management of this application's state the [Context API](https://legacy.reactjs.org/docs/context.html) was used!
Within all of this the app is able to receive a certain object with the specific user information to display all over the layout. 
Such Information like: 
- Credentials of the user
- Balance
- Average Income
- Credit card Information
- All the credit cards that the user posses in this bank
- Contacts of the user that have been active in the account movement
- A history of transactions made within a current credit card

Now each of the credit cards the user posses have their own information: 
- it's respective account
- credit card's number
- name of the owner
- date of expiration
- ICA
- Balance in the card

The application is built using [react router](https://reactrouter.com/en/main). This technology provides the application the ability to have different routes within the same layout. This app takes advantage of this and creates a route for each of the options in the left menu of the layout. 
- `/Home`
- `/Wallet`
- `/Recredit`
- `/Documentation`
- `/Charts`
- `/Settings`
- `/Power`

## What does each of these routes should display?
Each of this routes are a different section of the app:

**/Home**
Displays the main page which is the dashboard
> The dashboard as itself displays very important info from the user like `My Card`, `Contacts`, `Transactions`
> 
> On the other hand this section also displays a `Balance` section wich cares about showing charts to the user based on it's account information and an average income based on the user's previous records. (Important: this is still in development)

**/Wallet**
Displays some of the most popular information of the international bank markets, investment predictions and currency exchange recommendations 
> All this info is displayed through charts and tables
> The table section indicates for each country their currency movement and makes recommendations if it's a good time to make exchanges

**Recredit**
This section shows the user all of his accounts/credit cards associate with this bank
> Each credit card displays it's own information indicating the user the current account linked to this card
> Each card has a button to `Change this card` indicating the application to display the information based on this new account/credit card
> This section displays each card with the hidden number for security purposes just letting the user see the last 4 digits

**/Documentation**, **/Charts**, **/Settings**, **/Power**
> These routes are still in the development process!

  
## State management for this application

The state/information provided to this application should contain the following: 
`nameId: "", account: "", number: "", date: "", name: "", ica: "",balance: "", client: "",type: "mastercard, visa or americanExpress", styles: ""`

This will indicate for example the amount of credit cards of the user and each respective information:
`Look in the main dashboard/ My Card`
Now in the `/ReCredit` route if you select a credit card and set it as the current card, then the dashboard will display the information linked to this account/card.
This is accomplish using this react context api changing the value/state of the page when a modification occur.

![readme_video_bank_dashborad](https://github.com/Matdweb/bank-dashboard-react/assets/110640534/f4e42b3c-41de-45d3-9dd2-d9300ed08d42)

## Learn More

To learn more about vite.js, take a look at the following resources:

- [vite.js](https://vitejs.dev/) - learn about vite.js features.
- [Learn Vite.js](https://vitejs.dev/guide/) - follow vite's guide.

You can check out [the Vite GitHub repository](https://github.com/vitejs/vite)

## Deploy on Netlify

**Run the build command:**

```
npm run build
```

One of the easiest way to deploy your vite.js app is to use the [Netlify](https://www.netlify.com) platform

Check out the [vite.js deployment documentation](https://vitejs.dev/guide/static-deploy.html) for more details. 
And you can check here the [netlify guide](https://docs.netlify.com/get-started) to deploy the application.

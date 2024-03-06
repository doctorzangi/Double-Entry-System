import axios from "axios";

const BACKEND_API = process.env.BASE_API
export const customerList  = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/customers-list/', {
            headers: {
                
                'Content-Type': 'application/json', // Example of setting content type
                // Add more headers as needed
              }
        });
        const data = await response.json();
        // console.log('response :>> ', data);

        return data;           
    } catch (error) {
        // console.log("Error showing Customers", data.error)
        console.log("Error showing Customers", error)
    } 
}
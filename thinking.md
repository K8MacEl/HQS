
# Implementing a user story

- **USER STORY** A user fills out and submits the puppy form in order to create a puppy

### Thought process 

###### Client Side thinking
   
   1.  **What is my http request?**
       1. POST request to `'/api/posts'`
	     	* **When do I want to make the request (what component when called)?** When the user clicks submit on the form in the AddPuppyForm component.

		  	* **Where do I want to define the fetch request (what component)?** In the feedpage, because that is where the posts state is. 

   2.  **After The Response from the server, what do I want to update to reflect that action.?**
		* **Do I need to update the state?** In this case update the posts state
		* **What props need to passed or what props are changing when you update state?** In this case posts must be sent as a prop to the `PostFeed` component then the `PostCard` component
		   
<hr/>

###### Server Side thinking
1.  **What is the full address of the route the request is looking for?** `/api/posts/ POST request` (The route is defined in routes folder)
2. **What logic does my controller need to do?** 
	* Do I need to talk to aws? Am I sending a photo?
		* **Yes** 
			* I need multer setup, and s3 code setup in my ctrl function 
			* Perform some crud operation on the database using the Model
			* respond to the client with json
		* **No** 		
			* Perform some crud operation on the database using the Model
			* respond to the client with json	 

<hr/>
<br/>

# Implementing a user story (Example 2)

- **USER STORY** On the feedpage I want to see all of the posts!

### Thought process 

###### Client Side thinking
   
   1.  **What is my http request?**
       1. Please answer this question
	     	* **When do I want to make the request (what component when called)?** When the user clicks submit on the form in the AddPuppyForm component.

		  	* **Where do I want to define the fetch request (what component)?** In the feedpage, because that is where the posts state is.   
				* **User thinking** When the user goes to feed page 
				* **React thinking** 
				  * When the component loads
				    * **How do a call function the when page loads?** useEffect hook must be used!

   2.  **After The Response from the server, what do I want to update to reflect that action.?**
		* **Do I need to update the state?**  update the posts state, maybe implement the loading idea we talked about before
		* **What props need to passed or what props are changing when you update state?** must pass the posts state as a prop. The props will go to the *PostFeed* component. Then *each post* will go to the *PostCard* component.
		   
<hr/>
<hr/>


###### Server Side thinking
1.  **What is the full address of the route the request is looking for?** 
2. **What logic does my controller need to do?** 
	* Do I need to talk to aws? Am I sending a photo?
		* **Yes** 
			* I need multer setup, and s3 code setup in my ctrl function 
			* Perform some crud operation on the database using the Model
			* respond to the client with json
		* **No** 		
			* Perform some crud operation on the database using the Model
			* respond to the client with json	 

<hr/>		   


### Tree of Components in Pupstagram
![Imgur](https://imgur.com/aZYhBYU.png)

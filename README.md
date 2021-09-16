# PublicSoft-Project

RESTful API which exposed CRUD services via HTTP protocol using Spring Framework, MySQL DB and Angular FrameWork.
--------------------------------------------------------------------------------------------------------------
DESCRIPTION:

This RESTFul API based on Spring, MySQL using Spring Data JPA for persistence data storage and Angular to build the Client side (front-end). 
In this RESTful API i exposed API Endpoints via HTTP, and  handling HTTP Requests through API Endpoints. I tested this using Postman App.
Also, i used the Angular, more specifically Angular components, Angular Forms, and Angular Services. It goes into Angular HTTP Communication.

To run it :

1)run main class into SupplierApplication.java(this located into back-end file src/main/java/com/example/Supplier)

2)open cmd and go to directory file SupplierFrontend and then execute the command: ng serve --port 9000

3)finally, type into browser: http://localhost:9000

--------------------------------------------------------------------------------------------------------------

Configuration Backend with Frontend using corsFilter:

![Capture](https://user-images.githubusercontent.com/83978835/133517521-00eddab3-6df7-42ef-86e3-1b78265e37da.PNG)

Configuration with MySQL:

![Capture1](https://user-images.githubusercontent.com/83978835/133518104-7f4bfd01-48c7-46dc-966b-dc39fb797b16.PNG)

Define the URL, in which the frontent will listen:

![Capture2](https://user-images.githubusercontent.com/83978835/133518305-65449724-8e8c-4153-9e15-c6caba9a62f5.PNG)

----------------------------------------------------------------------------------------------------------------

CRUD FUNCTIONALITY 

UI:

![UI](https://user-images.githubusercontent.com/83978835/133518501-b57803d0-f2f2-45fc-b3be-0015a45b2f42.PNG)

ADD functionality:

![UIAdd1](https://user-images.githubusercontent.com/83978835/133519081-cc1a79b1-3064-4e6b-9973-68e08b49a8e3.PNG)

![UIAdd2](https://user-images.githubusercontent.com/83978835/133519153-941a809a-c762-4bd5-8373-8fbbf484a403.PNG)

DELETE functionality:

![UIDelete1](https://user-images.githubusercontent.com/83978835/133519295-67fc2492-693e-4766-aca5-3d920d9093f3.PNG)

![UIDelete2](https://user-images.githubusercontent.com/83978835/133519293-75cd2c3a-1726-47f7-a7df-fe7ad9e67e6b.PNG)


UPDATE functionality:

![UIUpdate1](https://user-images.githubusercontent.com/83978835/133519381-63f105fd-de50-452a-bbc8-380c806f2b5e.PNG)

![UIUpdate2](https://user-images.githubusercontent.com/83978835/133519382-eb6c8ed5-e104-484b-bc43-b1680c436ff3.PNG)

![UIUpdate3](https://user-images.githubusercontent.com/83978835/133519379-e366114d-8a52-4f06-b36b-106ec5d17330.PNG)

SEARCH functionality by Company without RequestMappin (from RestController):

![UISearch](https://user-images.githubusercontent.com/83978835/133519726-8ae806f4-372a-4ec7-b531-ac41205551c5.PNG)

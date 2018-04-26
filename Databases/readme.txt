#Databases

##Intro To Databases
*What is a database?
    -A collection of information/data
    -Has an interface (to interact with the data)
*SQL(relational) vs NoSQL(non-relational)

Example of Relational (SQL) database

USERS TABLE 
id  ¦ name  ¦ age   ¦ city 
___________________________
1   ¦ Tim   ¦ 57    ¦ NYC
2   ¦ Ira   ¦ 24    ¦ Missoula
3   ¦ Sue   ¦ 40    ¦ Boulder

COMMENTS TABLE
id  ¦       Text
___________________________
1   ¦ "lol"
2   ¦ "Come visit Montana"
3   ¦ "I love puppies!!!"
4   ¦ "Seriously, Montana is great!"

USER/COMMENTS JOINT TABLE
userId  ¦   commentId
___________________________
    1           3
    2           2
    2           4
    3           1
    
Pre - defined tables, and the need of an additional
"joint" table to allocate comments with users

___________________________
A NON-RELATIONAL DATABASE:
___________________________
{
    name:Ira
    age: 24
    city: Missoula
    comments: [
        {text: "Come visit Montana!"},
        {text: "Seriously, Montana is great"}
    ]
    favColor: purple (newly added data, no other users have.)
}

Almost like a common JS object, or as sometimes being
referred to "bjson" where "b" stands for binary

##Intro to MongoDB
*What is MongoDB
*Why are we using it?
*Lets install it!
# ASSESSMENT 6: Interview Practice Questions
<h2>
  Answer the following questions.

  First, without external resources. Challenge yourself to answer from memory.

  Then, research the question to expand on your answer. Even if you feel you 
  have answered the question completely on your own, there is always something 
  more to learn. Write your researched answer in your OWN WORDS.
</h2>

--------------------------------------------------------------------------------
<h2>
  1. As a developer, I am creating a Rails application with a model called 
  Cohort that has_many students, but OOPS! I forgot to add the foreign key. How 
  can I fix this mistake? What is the name of the foreign key? Would the foreign 
  key be on the Cohort model or the Student model?
</h2>

### Your answer:
* In order to fix this you would need to add the foreign key "cohort_id" with a 
data type of "integer" to the Student model. To do this you would need to create
a migration action in the terminal such as:

terminal
```bash
// format  => rails g migration <migration_action_name>
// example => rails g migration add_foreign_key
```

* This will create a migration file in your ruby application in db/migrate 
folder. You would then need to add the migration action you wish to happen in 
your table, which would be reflected in your model.

* you would declare the method "change" in that file, then a enter the 
information you want to change in this format bellow:

db/migrate/<RUBY_DATE_TIME_STAMP>_<migration_action_name>.rb
```ruby
  def change
   #<action> <table to change>, <column to add>, <table value>
    add_column :students, :cohort_id, :integer
  end
```

* After that you would want to do migrate your changes in the terminal to take 
affect:

terminal
```bash
rails db:migrate
```

* Once you do that your changes have taken effect and your model Student will 
have the foreign key of cohort_id associated with it.


### Researched answer:

--------------------------------------------------------------------------------
## 2. Which RESTful routes must always be passed params? Why?

### Your answer:
* The RESTful routes that must always be passed params are:
  * Show
  * Edit
  * Update
  * Destroy
* These RESTful routes must be passed params because they need to know the 
specific data in the model to apply the routes for.

### Researched answer:

--------------------------------------------------------------------------------
## 3. Name three rails generator commands. What is created by each?

### Your answer:
* Three rails generator commands are:



```bash
   rails generate model <Model_Name> <column_name>:<column_value> 
```
  * This creates a model to be used to for the rails application. 

```bash
  * rails generate migration <action_name_here>
```
  * this migrates the changes in the database that were created in the rails 
  app. 

```bash  
  * rails generate resource <Model_Name> <column_name>:<column_value> 
```
  * this is an all-in-one command that accomplishes many things such as creating
   the model, migrations, and setting up the routes.

### Researched answer:

--------------------------------------------------------------------------------
<h2> 
  4. Consider the Rails routes below. What is the name of the controller method 
  that would be called by each route? What action would each of the controller 
  methods perform?
</h2>

### action: "GET" location: /students

### action: "POST" location: /students

### action: "GET" location: /students/new

### action: "GET" location: /students/2

### action: "GET" location: /students/2/edit

### action: "PATCH" location: /students/2

### action: "DELETE" location: /students/2

--------------------------------------------------------------------------------
<h2>
  5. As a developer, you are making an application to manage your to do list. 
  Create 10 user stories that will help you get your application started. Read 
  more about 
  [user stories](https://www.atlassian.com/agile/project-management/user-stories).
</h2>

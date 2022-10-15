# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 
# comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# This is the controller for BlogPosts, which holds the methods that "control"
# the BlogPosts model. BlogPostsController is a class which is a child of the 
# ApplicationController class. 

# It also holds the controller actions:
#---------------------------------
# Create
# Index, Show, New, Edit
# Update
# Destroy
#---------------------------------
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # This utilizes the rails method "all" and assigns all the values that are 
    # stored for the BlogPost model in the @posts variable. This will then be 
    # utlized to display all the data in BlogPost 

    @posts = BlogPost.all
  end

  # ---3)
  # This controller action is used to show the data of 1 single object that is 
  # stored in BlogPost. This is accomplished by using the rails method "find"
  # along with the ID of the object

  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # This controller action is used to display a form. This does not actually 
  # create a new object.

  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # This controller action is used to create a new object that was submitted 
    # from a form created by the controller action "new". 

    # The rails method "create" is used with the argument private method
    # "blog_post_params"

    # if the creation of the object is valid, then redirect to the 
    # blog_post_path

    # if not, then stay on the new page

    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    # This assigns the value of the given object from BlogPost depending on the 
    # ID provided in params to @post. 

    # This is used to then display a page which displays the data of the object 
    # in a Form. This is then used to "edit" that data. 

    # This does not actually change the Object data, but helps facilitate the 
    # process by holding the data that will be used to change it in a later step 
    # with a different method called "update".

    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # This applies the rails method "update" with the "blog_post_params" method 
    # as an argument. 
    
    # This basically allows the user to update the data of the object they 
    # provided on the edit form which was created with the help of the "edit"
    # method on line 68 (question #6).

    # if the update of the object is valid, then redirect to the 
    # blog_post_path

    # if not, then stay on the edit page

    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      # This method "destroy" does just that the the selected object in BlogPost.

      # if "destroy" is called, then redirect to the index page showing all the 
      # blog posts. (which would show all your posts that were created sans the
      # newly destroyed post)

      redirect_to blog_posts_path
    end
  end

  # ---9)
  private
  def blog_post_params
    # ---10)
    params.require(:blog_post).permit(:title, :content)
  end
end

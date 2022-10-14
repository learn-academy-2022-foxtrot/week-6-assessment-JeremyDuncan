# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


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
    # stored for the BlogPost model in the @posts variable. This with then be 
    # utlized to display all the data in BlogPost 
    @posts = BlogPost.all
  end

  # ---3)
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
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

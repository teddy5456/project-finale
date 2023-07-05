# app/controllers/reviews_controller.rb
class ReviewsController < ApplicationController
    def index
      @menu = Menu.find(params[:menu_id])
      @reviews = @menu.reviews
      render json: @reviews
    end
  
    def create
      @menu = Menu.find(params[:menu_id])
      @review = @menu.reviews.new(review_params)
      
      if @review.save
        render json: @review, status: :created
      else
        render json: @review.errors, status: :unprocessable_entity
      end
    end
  
    private
  
    def review_params
      params.require(:review).permit(:customer_name, :rating, :content)
    end
  end
  
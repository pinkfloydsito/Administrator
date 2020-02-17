class Api::V1::ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy]

  def index
    @products = Product.all
    render json: @products
  end

  def show
    render json: @product
  end

  def create
    @product = Product.new(product_params)
    if @product.save    
      render json: @product, status: :created, location: api_v1_product_url(@product)   
    else    
      render json: @product.errors, status: :unprocessable_entity   
    end
  end

  def update   
    if @product.update(product_params)    
      render json: @product   
    else    
      render json: @product.errors, status: :unprocessable_entity   
    end  
  end

  def destroy
    @product.destroy
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def product_params
      params.require(:product).permit(:name, :color, :product_id, :size, :price, :store_id)
    end
end

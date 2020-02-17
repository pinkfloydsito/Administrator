class Api::V1::KeywordsController < ApplicationController
  before_action :set_keyword, only: [:show, :edit, :update, :destroy]

  def index
    @keywords = Keyword.all
    render json: @keywords
  end

  def show
    render json: @keyword
  end

  def create
    @keyword = Keyword.new(keyword_params)
    if @category.save    
      render json: @keyword, status: :created, location: api_v1_keyword_url(@keyword)   
    else    
      render json: @keyword.errors, status: :unprocessable_entity   
    end
  end

  def update   
    if @keyword.update(keyword_params)    
      render json: @keyword   
    else    
      render json: @keyword.errors, status: :unprocessable_entity   
    end  
  end

  def destroy
    @keyword.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_keyword
      @keyword = Keyword.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def keyword_params
      params.require(:keyword).permit(:name, :category_id)
    end
end

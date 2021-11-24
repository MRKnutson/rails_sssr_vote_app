class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy]

  # This will render our one html component (single page app)
  def app
    render component: "App"
  end

  # These all render JSON
  def index
    render json: Item.all
  end

  def show
    render json: @item
  end

  def create
    @item=Item.new(item_params)
    if(@item.save)
      # this will be status 204: 2xx - successful
      render json: @item
    else
      # status 4xx - client error: 422 is unporcessable entity (bad data)
      render json: {errors: @item.errors.full_messages}, status: 422
    end
  end

  def update
    if(@item.update(item_params))
      # this will be status 204: 2xx - successful
      render json: @item
    else
      # status 4xx - client error: 422 is unporcessable entity (bad data)
      render json: {errors: @item.errors.full_messages}, status: 422
    end
  end

  def destroy
    render json: @item.destroy
  end

  private

  def set_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name, :category, :likes, :description)
  end

end

json.extract! product, :id, :name, :color, :category_id, :size, :price, :store_id, :created_at, :updated_at
json.url product_url(product, format: :json)

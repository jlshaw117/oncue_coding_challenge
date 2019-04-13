class Api::TrucksController < ApplicationController

    def create
        @truck = Truck.new(truck_params)
        if @truck.truck_end <= @truck.truck_start
            render json: ['End time must be after start time'], status: 422
        elsif @truck.save
            render :show
        else
            render json: @truck.errors.full_messages, status: 422
        end
    end

    def index
        @trucks = Truck.all
        render :index
    end

    private

    def truck_params
        params.require(:truck).permit(:name, :truck_start, :truck_end)
    end
end

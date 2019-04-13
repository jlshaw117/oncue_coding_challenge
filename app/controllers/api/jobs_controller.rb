class Api::JobsController < ApplicationController

    def create
        @job = Job.new(job_params)
        @job.find_truck
        if @job.save
            render :show
        else
            render json: @job.errors.full_messages, status: 422
        end
    end

    def index
        @jobs = Job.all
        render :index
    end
    
    private

    def job_params
        params.require(:job).permit(:name_of_user, :date_of_move, :start_time, :est_end_time)
    end
end

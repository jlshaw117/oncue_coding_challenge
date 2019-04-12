class Api::JobsController < ApplicationController

    def create
        @job = Job.new(job_params)
        if @job.save
            render json: "Job created"
        else
            render json: @job.errors.full_messages
        end
    end
    
    private

    def job_params
        params.require(:job).permit(:name_of_user, :date_of_move, :start_time, :est_end_time)
    end
end

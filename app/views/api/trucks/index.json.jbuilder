@trucks.each do |truck|
    json.set! truck.id do
        json.partial! 'api/trucks/truck', truck: truck
        json.jobs truck.jobs.map {|job| job.id}
    end
end
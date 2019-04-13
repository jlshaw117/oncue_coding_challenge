json.partial! 'api/trucks/truck', truck: @truck
json.jobs @truck.jobs.map {|job| job.id}
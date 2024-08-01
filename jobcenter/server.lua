ESX = exports["es_extended"]:getSharedObject()

RegisterNetEvent("setjob")
AddEventHandler("setjob", function(jobname)
    local xPlayer = ESX.GetPlayerFromId(source)
    local Job = jobname
    local Grade = 0

    if ESX.DoesJobExist(Job, Grade) then
        xPlayer.setJob(Job, Grade)
    end
end)
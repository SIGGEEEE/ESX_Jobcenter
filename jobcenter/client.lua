person = false

ESX = exports["es_extended"]:getSharedObject()

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(1000)
        
        --------------
        -- spawner ped
        --------------

        if DoesEntityExist(person) == false then
            RequestModel(Config.person)
            while not HasModelLoaded(Config.person) do
                Citizen.Wait(100)
            end

            person = CreatePed(1, GetHashKey(Config.person), Config.location, true, true)
            FreezeEntityPosition(person, true)
            SetEntityInvincible(person, true)
            SetBlockingOfNonTemporaryEvents(person, true)
            TaskStandStill(person, 100000000000000000000000000000)

            local pedNetId = NetworkGetNetworkIdFromEntity(person)
            exports.ox_target:addEntity(pedNetId, Config.pedoptions)
        end
    end
end)


ESX.PlayerData = ESX.GetPlayerData()

RegisterNetEvent("openjobcenter")
AddEventHandler("openjobcenter", function()
    SetNuiFocus(true, true)
    SendNUIMessage({
        type = 'open',
    })
end)

RegisterNUICallback('closejobcenter', function(data)
    SetNuiFocus(false, false)
end)

RegisterNUICallback('givjob', function(data)
    
    if data.job == 'Postmand' then
        jobname = 'postmand'
    elseif data.job == 'Skraldemand' then
        jobname = 'skraldemand'
    elseif data.job == 'Farmer' then
        jobname = 'farmer'
    elseif data.job == 'Træhugger' then
        jobname = 'træhugger'
    elseif data.job == 'Pizzabud' then
        jobname = 'pizzabud'
    end

    TriggerServerEvent("setjob", jobname)

    Config.givejobnotify()

end)

RegisterNUICallback('setgps', function(data)
    
    local gps = nil

    if data.job == 'Postmand' then
        gps = vector3(67.8762, 125.1731, 79.1779)
    elseif data.job == 'Skraldemand' then
        gps = vector3(-315.0836, -1534.6810, 27.6474)
    elseif data.job == 'Farmer' then
        gps = vector3(2559.9612, 4688.3721, 34.0597)
    elseif data.job == 'Træhugger' then
        gps = vector3(-588.3614, 5305.7471, 70.2146)
    elseif data.job == 'Pizzabud' then
        gps = vector3(443.5000, 134.7627, 100.0219)
    end

    SetNewWaypoint(gps)

end)


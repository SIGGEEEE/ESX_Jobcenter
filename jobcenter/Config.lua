Config = {}

Config.location = vector4(236.4031, -409.4951, 47.9243 - 1, 333.8561)

Config.person = 'a_m_m_business_01'

Config.pedoptions = {
    label = "Open Jobcenter", -- det der står på target ved postmanden / lablet
    icon = "fas fa-user", -- iconet ved siden lablet
    distance = 3, -- hvor tæt man skal være på for at kunne se targetet på postmanden
    onSelect = function(data)
        TriggerEvent("openjobcenter") -- ik ændre i det her
    end
}

Config.givejobnotify = function (messagetype)
    lib.notify({
        title = 'Du er nu ' .. jobname,
        type = 'success'
    })
end
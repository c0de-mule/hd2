// =============================================================================
// Objective-Closing Configuration
// =============================================================================
// Defines which stratagems can reliably and repeatedly destroy fabricators
// or close bug holes throughout a full mission.
//
// Weapon/throwable objective-closing lives on items directly (closesObjectives).
// This config covers stratagems only.
// =============================================================================

window.HD2Data = window.HD2Data || {};
window.HD2Data.missionReadyConfig = {

    // =========================================================================
    // CLOSES OBJECTIVES — stratagems that can RELIABLY and REPEATEDLY destroy
    // fabricators / close bug holes throughout a full mission.
    // Only includes items practical as your sole objective-closing method.
    // Orbitals excluded (limited uses). Sentries excluded (uncontrollable aim).
    // Omitted = cannot practically close objectives on its own
    // =========================================================================
    closesObjectives: {
        // Support Weapons — reloadable/respawning explosive weapons
        'gr-8-recoilless-rifle': true,
        'ac-8-autocannon': true,
        'las-99-quasar-cannon': true,
        'mls-4x-commando': true,
        'faf-14-spear': true,
        'eat-17-expendable-anti-tank': true,
        'eat-411-leveller': true,
        'gl-21-grenade-launcher': true,
        'gl-28-belt-fed-grenade-launcher': true,
        'bmd-c4-pack': true,
        'ms-11-solo-silo': true,
        's-11-speargun': true,
        'cqc-20-breaching-hammer': true,

        // Eagles — multi-use, reliable structural damage
        'eagle-airstrike': true,
        'eagle-500kg-bomb': true,

        // Backpacks
        'b-100-portable-hellbomb': true,

        // Vehicles/Exosuits
        'exo-45-patriot-exosuit': true,
        'exo-49-emancipator-exosuit': true
    }
};

const agentsMock = [
	{
		uuid: 'dade69b4-4f5a-8528-247b-219e5a1facd6',
		displayName: 'Fade',
		description:
			'Turkish bounty hunter Fade unleashes the power of raw nightmare to seize enemy secrets. Attuned with terror itself, she hunts down targets and reveals their deepest fears - before crushing them in the dark.',
		developerName: 'BountyHunter',
		characterTags: null,
		displayIcon:
			'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayicon.png',
		displayIconSmall:
			'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayiconsmall.png',
		bustPortrait:
			'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png',
		fullPortrait:
			'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png',
		fullPortraitV2:
			'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png',
		killfeedPortrait:
			'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/killfeedportrait.png',
		background:
			'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/background.png',
		backgroundGradientColors: ['b1414cff', '5589bdff', '18344cff', '66376cff'],
		assetPath:
			'ShooterGame/Content/Characters/BountyHunter/BountyHunter_PrimaryAsset',
		isFullPortraitRightFacing: false,
		isPlayableCharacter: true,
		isAvailableForTest: true,
		isBaseContent: false,
		role: {
			uuid: '1b47567f-8f7b-444b-aae3-b0c634622d10',
			displayName: 'Initiator',
			description:
				'Initiators challenge angles by setting up their team to enter contested ground and push defenders away.',
			displayIcon:
				'https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png',
			assetPath:
				'ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset'
		},
		abilities: [
			{
				slot: 'Ability1',
				displayName: 'Seize',
				description:
					'EQUIP a knot of raw fear. FIRE to throw. The knot drops down after a set time. RE-USE to drop the knot early. The knot ruptures on impact, holding nearby enemies in place. Held enemies are deafened, and decayed.',
				displayIcon:
					'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/ability1/displayicon.png'
			},
			{
				slot: 'Ability2',
				displayName: 'Haunt',
				description:
					'EQUIP a haunting watcher. FIRE to throw. The watcher drops down after a set time. RE-USE to drop the watcher early. The watcher lashes out on impact, revealing enemies in its line of sight and creating terror trails to them. Enemies can destroy the watcher.',
				displayIcon:
					'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/ability2/displayicon.png'
			},
			{
				slot: 'Grenade',
				displayName: 'Prowler',
				description:
					'EQUIP a prowler. FIRE to send the prowler forward. HOLD FIRE to steer the prowler towards your crosshair. The prowler will chase down the first enemy or terror trail it sees, and nearsight the enemy on impact.',
				displayIcon:
					'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/grenade/displayicon.png'
			},
			{
				slot: 'Ultimate',
				displayName: 'Nightfall',
				description:
					'EQUIP the power of nightmare itself. FIRE to unleash a wave of unstoppable nightmare energy. Enemies caught in the wave are marked by terror trails, deafened, and decayed.',
				displayIcon:
					'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/ultimate/displayicon.png'
			}
		],
		voiceLine: {
			minDuration: 2.578,
			maxDuration: 2.578,
			mediaList: [
				{
					id: 963067082,
					wwise: 'https://media.valorant-api.com/sounds/963067082.wem',
					wave: 'https://media.valorant-api.com/sounds/963067082.wav'
				}
			]
		}
	},
	{
		uuid: '5f8d3a7f-467b-97f3-062c-13acf203c006',
		displayName: 'Breach',
		description:
			'The bionic Swede Breach fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.',
		developerName: 'Breach',
		characterTags: null,
		displayIcon:
			'https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/displayicon.png',
		displayIconSmall:
			'https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/displayiconsmall.png',
		bustPortrait:
			'https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/fullportrait.png',
		fullPortrait:
			'https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/fullportrait.png',
		fullPortraitV2:
			'https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/fullportrait.png',
		killfeedPortrait:
			'https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/killfeedportrait.png',
		background:
			'https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/background.png',
		backgroundGradientColors: ['ff9c33ff', 'b04621ff', '523a23ff', '44412eff'],
		assetPath: 'ShooterGame/Content/Characters/Breach/Breach_PrimaryAsset',
		isFullPortraitRightFacing: false,
		isPlayableCharacter: true,
		isAvailableForTest: true,
		isBaseContent: false,
		role: {
			uuid: '1b47567f-8f7b-444b-aae3-b0c634622d10',
			displayName: 'Initiator',
			description:
				'Initiators challenge angles by setting up their team to enter contested ground and push defenders away.',
			displayIcon:
				'https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png',
			assetPath:
				'ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset'
		},
		abilities: [
			{
				slot: 'Ability1',
				displayName: 'Flashpoint',
				description:
					'EQUIP a blinding charge. FIRE the charge to set a fast-acting burst through the wall. The charge detonates to blind all players looking at it.',
				displayIcon:
					'https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/ability1/displayicon.png'
			},
			{
				slot: 'Ability2',
				displayName: 'Fault Line',
				description:
					'EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone.',
				displayIcon:
					'https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/ability2/displayicon.png'
			},
			{
				slot: 'Grenade',
				displayName: 'Aftershock',
				description:
					'EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.',
				displayIcon:
					'https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/grenade/displayicon.png'
			},
			{
				slot: 'Ultimate',
				displayName: 'Rolling Thunder',
				description:
					'EQUIP a Seismic Charge. FIRE to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.',
				displayIcon:
					'https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/ultimate/displayicon.png'
			}
		],
		voiceLine: {
			minDuration: 2.456469,
			maxDuration: 2.456469,
			mediaList: [
				{
					id: 802792402,
					wwise: 'https://media.valorant-api.com/sounds/802792402.wem',
					wave: 'https://media.valorant-api.com/sounds/802792402.wav'
				}
			]
		}
	},
	{
		uuid: '6f2a04ca-43e0-be17-7f36-b3908627744d',
		displayName: 'Skye',
		description:
			"Hailing from Australia, Skye and her band of beasts trailblaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye's side.",
		developerName: 'Guide',
		characterTags: null,
		displayIcon:
			'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png',
		displayIconSmall:
			'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayiconsmall.png',
		bustPortrait:
			'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/fullportrait.png',
		fullPortrait:
			'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/fullportrait.png',
		fullPortraitV2:
			'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/fullportrait.png',
		killfeedPortrait:
			'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/killfeedportrait.png',
		background:
			'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/background.png',
		backgroundGradientColors: ['94e789ff', 'aa8a49ff', '4f1413ff', '314d48ff'],
		assetPath: 'ShooterGame/Content/Characters/Guide/Guide_PrimaryAsset',
		isFullPortraitRightFacing: false,
		isPlayableCharacter: true,
		isAvailableForTest: true,
		isBaseContent: false,
		role: {
			uuid: '1b47567f-8f7b-444b-aae3-b0c634622d10',
			displayName: 'Initiator',
			description:
				'Initiators challenge angles by setting up their team to enter contested ground and push defenders away.',
			displayIcon:
				'https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png',
			assetPath:
				'ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset'
		},
		abilities: [
			{
				slot: 'Ability1',
				displayName: 'Trailblazer',
				description:
					'EQUIP a Tasmanian tiger trinket. FIRE to send out and take control of the predator.  While in control, FIRE to leap forward, exploding in a concussive blast and damaging directly hit enemies.',
				displayIcon:
					'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/abilities/ability1/displayicon.png'
			},
			{
				slot: 'Ability2',
				displayName: 'Guiding Light',
				description:
					"EQUIP a hawk trinket.  FIRE to send it forward. HOLD FIRE to guide the hawk in the direction of your crosshair. RE-USE while the hawk is in flight to transform it into a flash. The flash reaches max potency after a short duration during the hawk's flight.",
				displayIcon:
					'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/abilities/ability2/displayicon.png'
			},
			{
				slot: 'Grenade',
				displayName: 'Regrowth',
				description:
					'EQUIP a healing trinket.  HOLD FIRE to channel, healing allies in range and line of sight.  Can be reused until her healing pool is depleted.  Skye cannot heal herself.',
				displayIcon:
					'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/abilities/grenade/displayicon.png'
			},
			{
				slot: 'Ultimate',
				displayName: 'Seekers',
				description:
					'EQUIP a Seeker trinket.  FIRE to send out three Seekers to track down the three closest enemies.  If a Seeker reaches its target, it nearsights them.',
				displayIcon:
					'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/abilities/ultimate/displayicon.png'
			}
		],
		voiceLine: {
			minDuration: 1.807344,
			maxDuration: 1.807344,
			mediaList: [
				{
					id: 452875258,
					wwise: 'https://media.valorant-api.com/sounds/452875258.wem',
					wave: 'https://media.valorant-api.com/sounds/452875258.wav'
				}
			]
		}
	}
];

export default agentsMock;

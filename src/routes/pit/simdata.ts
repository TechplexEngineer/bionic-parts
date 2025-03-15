import { NexusEventStatus, StatboticsTeamEvent, StatboticsTeamMatches, StatboticsTeamYear } from "./restTypes";

const team = {
    "team": 4909,
    "year": 2025,
    "name": "Bionics",
    "country": "USA",
    "state": "MA",
    "district": "ne",
    "epa": {
        "total_points": {
            "mean": 58.84,
            "sd": 5.89
        },
        "unitless": 1712,
        "norm": 1814,
        "conf": [
            -0.91,
            1.03
        ],
        "breakdown": {
            "total_points": 58.84,
            "auto_points": 14.56,
            "teleop_points": 38.73,
            "endgame_points": 5.54,
            "auto_rp": 0.391,
            "coral_rp": 0.0443,
            "barge_rp": 0.28128,
            "tiebreaker_points": 0.08,
            "auto_leave_points": 3.49,
            "auto_coral": 1.52,
            "auto_coral_points": 11.07,
            "teleop_coral": 8.91,
            "teleop_coral_points": 36.96,
            "coral_l1": 0.62,
            "coral_l2": 1.59,
            "coral_l3": 2.55,
            "coral_l4": 5.77,
            "total_coral_points": 48.03,
            "processor_algae": 0.16,
            "processor_algae_points": 0.47,
            "net_algae": 0.33,
            "net_algae_points": 1.3,
            "total_algae_points": 1.77,
            "total_game_pieces": 11.03,
            "barge_points": 5.54,
            "rp_1": 0.391,
            "rp_2": 0.0443,
            "rp_3": 0.28128
        },
        "stats": {
            "start": 35.32,
            "pre_champs": 58.84,
            "max": 59.34
        },
        "ranks": {
            "total": {
                "rank": 31,
                "percentile": 0.9917,
                "team_count": 3715
            },
            "country": {
                "rank": 23,
                "percentile": 0.9922,
                "team_count": 2949
            },
            "state": {
                "rank": 2,
                "percentile": 0.9714,
                "team_count": 70
            },
            "district": {
                "rank": 4,
                "percentile": 0.9791,
                "team_count": 191
            }
        }
    },
    "record": {
        "wins": 14,
        "losses": 3,
        "ties": 0,
        "count": 17,
        "winrate": 0.8235
    },
    "district_points": 56,
    "district_rank": 7,
    "competing": {
        "this_week": false,
        "next_event_key": "2025melew",
        "next_event_name": "NE District Pine Tree Event",
        "next_event_week": 3
    }
};

const matches = [
    {
        "key": "2025nhsal_f1m1",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": true,
        "comp_level": "f",
        "set_number": 1,
        "match_number": 1,
        "match_name": "Finals Match 1",
        "time": 1740947040,
        "predicted_time": 1740948613,
        "status": "Completed",
        "video": "SLBngs_Ja1c",
        "alliances": {
            "red": {
                "team_keys": [
                    2877,
                    1512,
                    4909
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    9443,
                    6328,
                    3467
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.2703,
            "red_score": 132.74,
            "blue_score": 159.47,
            "red_auto_rp": 0.8542,
            "blue_auto_rp": 0.9539,
            "red_coral_rp": 0.0957,
            "blue_coral_rp": 0.5158,
            "red_barge_rp": 0.6546,
            "blue_barge_rp": 0.877,
            "red_rp_1": 0.8542,
            "blue_rp_1": 0.9539,
            "red_rp_2": 0.0957,
            "blue_rp_2": 0.5158,
            "red_rp_3": 0.6546,
            "blue_rp_3": 0.877
        },
        "result": {
            "winner": "blue",
            "red_score": 121,
            "blue_score": 161,
            "red_no_foul": 119,
            "blue_no_foul": 155,
            "red_auto_points": 44,
            "blue_auto_points": 48,
            "red_teleop_points": 71,
            "blue_teleop_points": 93,
            "red_endgame_points": 4,
            "blue_endgame_points": 14,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 5,
            "blue_auto_coral": 6,
            "red_auto_coral_points": 35,
            "blue_auto_coral_points": 39,
            "red_teleop_coral": 16,
            "blue_teleop_coral": 21,
            "red_teleop_coral_points": 67,
            "blue_teleop_coral_points": 87,
            "red_coral_l1": 1,
            "blue_coral_l1": 1,
            "red_coral_l2": 2,
            "blue_coral_l2": 3,
            "red_coral_l3": 6,
            "blue_coral_l3": 11,
            "red_coral_l4": 12,
            "blue_coral_l4": 12,
            "red_total_coral_points": 102,
            "blue_total_coral_points": 126,
            "red_processor_algae": 0,
            "blue_processor_algae": 1,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 6,
            "red_net_algae": 1,
            "blue_net_algae": 0,
            "red_net_algae_points": 4,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 4,
            "blue_total_algae_points": 6,
            "red_total_game_pieces": 22,
            "blue_total_game_pieces": 28,
            "red_barge_points": 4,
            "blue_barge_points": 14,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_f1m2",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": true,
        "comp_level": "f",
        "set_number": 1,
        "match_number": 2,
        "match_name": "Finals Match 2",
        "time": 1740948300,
        "predicted_time": 1740950111,
        "status": "Completed",
        "video": "QIbBIqComQE",
        "alliances": {
            "red": {
                "team_keys": [
                    2877,
                    4909,
                    1512
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    9443,
                    6328,
                    3467
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.2636,
            "red_score": 131.96,
            "blue_score": 159.62,
            "red_auto_rp": 0.8542,
            "blue_auto_rp": 0.9539,
            "red_coral_rp": 0.0957,
            "blue_coral_rp": 0.5158,
            "red_barge_rp": 0.6546,
            "blue_barge_rp": 0.877,
            "red_rp_1": 0.8542,
            "blue_rp_1": 0.9539,
            "red_rp_2": 0.0957,
            "blue_rp_2": 0.5158,
            "red_rp_3": 0.6546,
            "blue_rp_3": 0.877
        },
        "result": {
            "winner": "blue",
            "red_score": 145,
            "blue_score": 181,
            "red_no_foul": 143,
            "blue_no_foul": 181,
            "red_auto_points": 37,
            "blue_auto_points": 48,
            "red_teleop_points": 80,
            "blue_teleop_points": 119,
            "red_endgame_points": 26,
            "blue_endgame_points": 14,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 4,
            "blue_auto_coral": 6,
            "red_auto_coral_points": 28,
            "blue_auto_coral_points": 39,
            "red_teleop_coral": 19,
            "blue_teleop_coral": 29,
            "red_teleop_coral_points": 80,
            "blue_teleop_coral_points": 113,
            "red_coral_l1": 1,
            "blue_coral_l1": 0,
            "red_coral_l2": 2,
            "blue_coral_l2": 11,
            "red_coral_l3": 8,
            "blue_coral_l3": 12,
            "red_coral_l4": 12,
            "blue_coral_l4": 12,
            "red_total_coral_points": 108,
            "blue_total_coral_points": 152,
            "red_processor_algae": 0,
            "blue_processor_algae": 1,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 6,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 6,
            "red_total_game_pieces": 23,
            "blue_total_game_pieces": 36,
            "red_barge_points": 26,
            "blue_barge_points": 14,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm1",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 1,
        "match_name": "Qual 1",
        "time": 1740844800,
        "predicted_time": 1740846130,
        "status": "Completed",
        "video": "dO0own8aQxg",
        "alliances": {
            "red": {
                "team_keys": [
                    663,
                    6620,
                    319
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    10156,
                    1761,
                    5491
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": [
                    5491
                ]
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.7664,
            "red_score": 85.17,
            "blue_score": 53.18,
            "red_auto_rp": 0.4112,
            "blue_auto_rp": 0.2663,
            "red_coral_rp": 0.05,
            "blue_coral_rp": 0.0464,
            "red_barge_rp": 0.3209,
            "blue_barge_rp": 0.2209,
            "red_rp_1": 0.4112,
            "blue_rp_1": 0.2663,
            "red_rp_2": 0.05,
            "blue_rp_2": 0.0464,
            "red_rp_3": 0.3209,
            "blue_rp_3": 0.2209
        },
        "result": {
            "winner": "red",
            "red_score": 87,
            "blue_score": 13,
            "red_no_foul": 63,
            "blue_no_foul": 13,
            "red_auto_points": 6,
            "blue_auto_points": 3,
            "red_teleop_points": 51,
            "blue_teleop_points": 8,
            "red_endgame_points": 6,
            "blue_endgame_points": 2,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 6,
            "blue_auto_leave_points": 3,
            "red_auto_coral": 0,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 9,
            "blue_teleop_coral": 0,
            "red_teleop_coral_points": 39,
            "blue_teleop_coral_points": 0,
            "red_coral_l1": 2,
            "blue_coral_l1": 0,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 0,
            "red_coral_l4": 7,
            "blue_coral_l4": 0,
            "red_total_coral_points": 39,
            "blue_total_coral_points": 0,
            "red_processor_algae": 2,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 12,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 2,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 8,
            "red_total_algae_points": 12,
            "blue_total_algae_points": 8,
            "red_total_game_pieces": 11,
            "blue_total_game_pieces": 2,
            "red_barge_points": 6,
            "blue_barge_points": 2,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm10",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 10,
        "match_name": "Qual 10",
        "time": 1740849480,
        "predicted_time": 1740851539,
        "status": "Completed",
        "video": null,
        "alliances": {
            "red": {
                "team_keys": [
                    8410,
                    1058,
                    5962
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    9729,
                    663,
                    1721
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.6895,
            "red_score": 86.43,
            "blue_score": 64.95,
            "red_auto_rp": 0.4315,
            "blue_auto_rp": 0.2596,
            "red_coral_rp": 0.048,
            "blue_coral_rp": 0.0461,
            "red_barge_rp": 0.3573,
            "blue_barge_rp": 0.3007,
            "red_rp_1": 0.4315,
            "blue_rp_1": 0.2596,
            "red_rp_2": 0.048,
            "blue_rp_2": 0.0461,
            "red_rp_3": 0.3573,
            "blue_rp_3": 0.3007
        },
        "result": {
            "winner": "red",
            "red_score": 67,
            "blue_score": 55,
            "red_no_foul": 67,
            "blue_no_foul": 43,
            "red_auto_points": 16,
            "blue_auto_points": 6,
            "red_teleop_points": 37,
            "blue_teleop_points": 33,
            "red_endgame_points": 14,
            "blue_endgame_points": 4,
            "red_auto_rp": true,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 6,
            "red_auto_coral": 1,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 7,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 7,
            "blue_teleop_coral": 6,
            "red_teleop_coral_points": 33,
            "blue_teleop_coral_points": 27,
            "red_coral_l1": 0,
            "blue_coral_l1": 1,
            "red_coral_l2": 1,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 0,
            "red_coral_l4": 7,
            "blue_coral_l4": 5,
            "red_total_coral_points": 40,
            "blue_total_coral_points": 27,
            "red_processor_algae": 0,
            "blue_processor_algae": 1,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 6,
            "red_net_algae": 1,
            "blue_net_algae": 0,
            "red_net_algae_points": 4,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 4,
            "blue_total_algae_points": 6,
            "red_total_game_pieces": 9,
            "blue_total_game_pieces": 7,
            "red_barge_points": 14,
            "blue_barge_points": 4,
            "red_rp_1": true,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm11",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 11,
        "match_name": "Qual 11",
        "time": 1740849960,
        "predicted_time": 1740853987,
        "status": "Completed",
        "video": null,
        "alliances": {
            "red": {
                "team_keys": [
                    4925,
                    6620,
                    1761
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    501,
                    97,
                    8708
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.3354,
            "red_score": 43.2,
            "blue_score": 61.61,
            "red_auto_rp": 0.1932,
            "blue_auto_rp": 0.3141,
            "red_coral_rp": 0.0437,
            "blue_coral_rp": 0.0455,
            "red_barge_rp": 0.2403,
            "blue_barge_rp": 0.2732,
            "red_rp_1": 0.1932,
            "blue_rp_1": 0.3141,
            "red_rp_2": 0.0437,
            "blue_rp_2": 0.0455,
            "red_rp_3": 0.2403,
            "blue_rp_3": 0.2732
        },
        "result": {
            "winner": "blue",
            "red_score": 15,
            "blue_score": 21,
            "red_no_foul": 15,
            "blue_no_foul": 21,
            "red_auto_points": 3,
            "blue_auto_points": 9,
            "red_teleop_points": 6,
            "blue_teleop_points": 4,
            "red_endgame_points": 6,
            "blue_endgame_points": 8,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 3,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 0,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 0,
            "blue_teleop_coral": 0,
            "red_teleop_coral_points": 0,
            "blue_teleop_coral_points": 0,
            "red_coral_l1": 0,
            "blue_coral_l1": 0,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 0,
            "red_coral_l4": 0,
            "blue_coral_l4": 0,
            "red_total_coral_points": 0,
            "blue_total_coral_points": 0,
            "red_processor_algae": 1,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 6,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 1,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 4,
            "red_total_algae_points": 6,
            "blue_total_algae_points": 4,
            "red_total_game_pieces": 1,
            "blue_total_game_pieces": 1,
            "red_barge_points": 6,
            "blue_barge_points": 8,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm12",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 12,
        "match_name": "Qual 12",
        "time": 1740850440,
        "predicted_time": 1740854650,
        "status": "Completed",
        "video": null,
        "alliances": {
            "red": {
                "team_keys": [
                    6690,
                    3623,
                    7314
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    4909,
                    6328,
                    1768
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.0464,
            "red_score": 60.88,
            "blue_score": 142.24,
            "red_auto_rp": 0.28,
            "blue_auto_rp": 0.745,
            "red_coral_rp": 0.0446,
            "blue_coral_rp": 0.0537,
            "red_barge_rp": 0.2485,
            "blue_barge_rp": 0.4205,
            "red_rp_1": 0.28,
            "blue_rp_1": 0.745,
            "red_rp_2": 0.0446,
            "blue_rp_2": 0.0537,
            "red_rp_3": 0.2485,
            "blue_rp_3": 0.4205
        },
        "result": {
            "winner": "blue",
            "red_score": 53,
            "blue_score": 179,
            "red_no_foul": 53,
            "blue_no_foul": 173,
            "red_auto_points": 9,
            "blue_auto_points": 23,
            "red_teleop_points": 44,
            "blue_teleop_points": 124,
            "red_endgame_points": 0,
            "blue_endgame_points": 26,
            "red_auto_rp": false,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": true,
            "red_barge_rp": false,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 0,
            "blue_auto_coral": 2,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 14,
            "red_teleop_coral": 4,
            "blue_teleop_coral": 28,
            "red_teleop_coral_points": 20,
            "blue_teleop_coral_points": 100,
            "red_coral_l1": 0,
            "blue_coral_l1": 6,
            "red_coral_l2": 0,
            "blue_coral_l2": 7,
            "red_coral_l3": 0,
            "blue_coral_l3": 8,
            "red_coral_l4": 4,
            "blue_coral_l4": 9,
            "red_total_coral_points": 20,
            "blue_total_coral_points": 114,
            "red_processor_algae": 4,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 24,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 6,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 24,
            "red_total_algae_points": 24,
            "blue_total_algae_points": 24,
            "red_total_game_pieces": 8,
            "blue_total_game_pieces": 36,
            "red_barge_points": 0,
            "blue_barge_points": 26,
            "red_rp_1": false,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": true,
            "red_rp_3": false,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm13",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 13,
        "match_name": "Qual 13",
        "time": 1740850920,
        "predicted_time": 1740855076,
        "status": "Completed",
        "video": null,
        "alliances": {
            "red": {
                "team_keys": [
                    811,
                    1247,
                    2877
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    3467,
                    319,
                    2342
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.2346,
            "red_score": 88.37,
            "blue_score": 120.21,
            "red_auto_rp": 0.5898,
            "blue_auto_rp": 0.5394,
            "red_coral_rp": 0.0442,
            "blue_coral_rp": 0.0482,
            "red_barge_rp": 0.4127,
            "blue_barge_rp": 0.5427,
            "red_rp_1": 0.5898,
            "blue_rp_1": 0.5394,
            "red_rp_2": 0.0442,
            "blue_rp_2": 0.0482,
            "red_rp_3": 0.4127,
            "blue_rp_3": 0.5427
        },
        "result": {
            "winner": "blue",
            "red_score": 110,
            "blue_score": 136,
            "red_no_foul": 104,
            "blue_no_foul": 130,
            "red_auto_points": 23,
            "blue_auto_points": 16,
            "red_teleop_points": 65,
            "blue_teleop_points": 110,
            "red_endgame_points": 16,
            "blue_endgame_points": 4,
            "red_auto_rp": true,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": true,
            "red_barge_rp": true,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 1,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 2,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 14,
            "blue_auto_coral_points": 7,
            "red_teleop_coral": 11,
            "blue_teleop_coral": 21,
            "red_teleop_coral_points": 41,
            "blue_teleop_coral_points": 84,
            "red_coral_l1": 2,
            "blue_coral_l1": 0,
            "red_coral_l2": 2,
            "blue_coral_l2": 7,
            "red_coral_l3": 4,
            "blue_coral_l3": 7,
            "red_coral_l4": 5,
            "blue_coral_l4": 8,
            "red_total_coral_points": 55,
            "blue_total_coral_points": 91,
            "red_processor_algae": 2,
            "blue_processor_algae": 3,
            "red_processor_algae_points": 12,
            "blue_processor_algae_points": 18,
            "red_net_algae": 3,
            "blue_net_algae": 2,
            "red_net_algae_points": 12,
            "blue_net_algae_points": 8,
            "red_total_algae_points": 24,
            "blue_total_algae_points": 26,
            "red_total_game_pieces": 18,
            "blue_total_game_pieces": 27,
            "red_barge_points": 16,
            "blue_barge_points": 4,
            "red_rp_1": true,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": true,
            "red_rp_3": true,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm14",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 14,
        "match_name": "Qual 14",
        "time": 1740851400,
        "predicted_time": 1740855728,
        "status": "Completed",
        "video": null,
        "alliances": {
            "red": {
                "team_keys": [
                    9443,
                    663,
                    8013
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    5962,
                    10156,
                    1512
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.7672,
            "red_score": 92.13,
            "blue_score": 60.02,
            "red_auto_rp": 0.364,
            "blue_auto_rp": 0.3054,
            "red_coral_rp": 0.0462,
            "blue_coral_rp": 0.0426,
            "red_barge_rp": 0.5829,
            "blue_barge_rp": 0.3572,
            "red_rp_1": 0.364,
            "blue_rp_1": 0.3054,
            "red_rp_2": 0.0462,
            "blue_rp_2": 0.0426,
            "red_rp_3": 0.5829,
            "blue_rp_3": 0.3572
        },
        "result": {
            "winner": "red",
            "red_score": 118,
            "blue_score": 31,
            "red_no_foul": 106,
            "blue_no_foul": 25,
            "red_auto_points": 13,
            "blue_auto_points": 9,
            "red_teleop_points": 79,
            "blue_teleop_points": 10,
            "red_endgame_points": 14,
            "blue_endgame_points": 6,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 6,
            "blue_auto_leave_points": 3,
            "red_auto_coral": 1,
            "blue_auto_coral": 2,
            "red_auto_coral_points": 7,
            "blue_auto_coral_points": 6,
            "red_teleop_coral": 14,
            "blue_teleop_coral": 4,
            "red_teleop_coral_points": 63,
            "blue_teleop_coral_points": 10,
            "red_coral_l1": 0,
            "blue_coral_l1": 2,
            "red_coral_l2": 3,
            "blue_coral_l2": 2,
            "red_coral_l3": 1,
            "blue_coral_l3": 0,
            "red_coral_l4": 11,
            "blue_coral_l4": 0,
            "red_total_coral_points": 70,
            "blue_total_coral_points": 16,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 4,
            "blue_net_algae": 0,
            "red_net_algae_points": 16,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 16,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 19,
            "blue_total_game_pieces": 4,
            "red_barge_points": 14,
            "blue_barge_points": 6,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm15",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 15,
        "match_name": "Qual 15",
        "time": 1740853680,
        "predicted_time": 1740856143,
        "status": "Completed",
        "video": "mZ3HvOsFwHs",
        "alliances": {
            "red": {
                "team_keys": [
                    97,
                    5902,
                    1721
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    501,
                    6620,
                    1277
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.3787,
            "red_score": 45.88,
            "blue_score": 59.21,
            "red_auto_rp": 0.1539,
            "blue_auto_rp": 0.2616,
            "red_coral_rp": 0.0423,
            "blue_coral_rp": 0.0432,
            "red_barge_rp": 0.2637,
            "blue_barge_rp": 0.2944,
            "red_rp_1": 0.1539,
            "blue_rp_1": 0.2616,
            "red_rp_2": 0.0423,
            "blue_rp_2": 0.0432,
            "red_rp_3": 0.2637,
            "blue_rp_3": 0.2944
        },
        "result": {
            "winner": "blue",
            "red_score": 34,
            "blue_score": 45,
            "red_no_foul": 34,
            "blue_no_foul": 39,
            "red_auto_points": 9,
            "blue_auto_points": 6,
            "red_teleop_points": 23,
            "blue_teleop_points": 27,
            "red_endgame_points": 2,
            "blue_endgame_points": 6,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 6,
            "red_auto_coral": 0,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 1,
            "blue_teleop_coral": 3,
            "red_teleop_coral_points": 5,
            "blue_teleop_coral_points": 15,
            "red_coral_l1": 0,
            "blue_coral_l1": 0,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 0,
            "red_coral_l4": 1,
            "blue_coral_l4": 3,
            "red_total_coral_points": 5,
            "blue_total_coral_points": 15,
            "red_processor_algae": 3,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 18,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 3,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 12,
            "red_total_algae_points": 18,
            "blue_total_algae_points": 12,
            "red_total_game_pieces": 4,
            "blue_total_game_pieces": 6,
            "red_barge_points": 2,
            "blue_barge_points": 6,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm16",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 16,
        "match_name": "Qual 16",
        "time": 1740854160,
        "predicted_time": 1740856687,
        "status": "Completed",
        "video": "LdoweTjrLc8",
        "alliances": {
            "red": {
                "team_keys": [
                    1761,
                    1058,
                    9729
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    138,
                    1768,
                    3623
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.2246,
            "red_score": 67.5,
            "blue_score": 100.86,
            "red_auto_rp": 0.3933,
            "blue_auto_rp": 0.4191,
            "red_coral_rp": 0.044,
            "blue_coral_rp": 0.07,
            "red_barge_rp": 0.3298,
            "blue_barge_rp": 0.4916,
            "red_rp_1": 0.3933,
            "blue_rp_1": 0.4191,
            "red_rp_2": 0.044,
            "blue_rp_2": 0.07,
            "red_rp_3": 0.3298,
            "blue_rp_3": 0.4916
        },
        "result": {
            "winner": "blue",
            "red_score": 39,
            "blue_score": 149,
            "red_no_foul": 39,
            "blue_no_foul": 99,
            "red_auto_points": 3,
            "blue_auto_points": 23,
            "red_teleop_points": 30,
            "blue_teleop_points": 70,
            "red_endgame_points": 6,
            "blue_endgame_points": 6,
            "red_auto_rp": false,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 3,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 0,
            "blue_auto_coral": 2,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 14,
            "red_teleop_coral": 6,
            "blue_teleop_coral": 17,
            "red_teleop_coral_points": 30,
            "blue_teleop_coral_points": 62,
            "red_coral_l1": 0,
            "blue_coral_l1": 2,
            "red_coral_l2": 0,
            "blue_coral_l2": 6,
            "red_coral_l3": 0,
            "blue_coral_l3": 5,
            "red_coral_l4": 6,
            "blue_coral_l4": 6,
            "red_total_coral_points": 30,
            "blue_total_coral_points": 76,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 2,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 8,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 8,
            "red_total_game_pieces": 6,
            "blue_total_game_pieces": 21,
            "red_barge_points": 6,
            "blue_barge_points": 6,
            "red_rp_1": false,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm17",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 17,
        "match_name": "Qual 17",
        "time": 1740854640,
        "predicted_time": 1740857187,
        "status": "Completed",
        "video": "gO3GbqOmwMI",
        "alliances": {
            "red": {
                "team_keys": [
                    6201,
                    8708,
                    7314
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    6690,
                    9644,
                    3566
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.4968,
            "red_score": 65.89,
            "blue_score": 66.24,
            "red_auto_rp": 0.3112,
            "blue_auto_rp": 0.24,
            "red_coral_rp": 0.0426,
            "blue_coral_rp": 0.043,
            "red_barge_rp": 0.2827,
            "blue_barge_rp": 0.1933,
            "red_rp_1": 0.3112,
            "blue_rp_1": 0.24,
            "red_rp_2": 0.0426,
            "blue_rp_2": 0.043,
            "red_rp_3": 0.2827,
            "blue_rp_3": 0.1933
        },
        "result": {
            "winner": "red",
            "red_score": 95,
            "blue_score": 65,
            "red_no_foul": 95,
            "blue_no_foul": 65,
            "red_auto_points": 16,
            "blue_auto_points": 9,
            "red_teleop_points": 63,
            "blue_teleop_points": 52,
            "red_endgame_points": 16,
            "blue_endgame_points": 4,
            "red_auto_rp": true,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 1,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 7,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 15,
            "blue_teleop_coral": 9,
            "red_teleop_coral_points": 57,
            "blue_teleop_coral_points": 44,
            "red_coral_l1": 4,
            "blue_coral_l1": 0,
            "red_coral_l2": 3,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 1,
            "red_coral_l4": 9,
            "blue_coral_l4": 8,
            "red_total_coral_points": 64,
            "blue_total_coral_points": 44,
            "red_processor_algae": 1,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 6,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 2,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 8,
            "red_total_algae_points": 6,
            "blue_total_algae_points": 8,
            "red_total_game_pieces": 17,
            "blue_total_game_pieces": 11,
            "red_barge_points": 16,
            "blue_barge_points": 4,
            "red_rp_1": true,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm18",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 18,
        "match_name": "Qual 18",
        "time": 1740855120,
        "predicted_time": 1740858191,
        "status": "Completed",
        "video": "eD2ExrwC_78",
        "alliances": {
            "red": {
                "team_keys": [
                    6328,
                    5491,
                    4925
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    8410,
                    4909,
                    4987
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.485,
            "red_score": 81.09,
            "blue_score": 82.7,
            "red_auto_rp": 0.4043,
            "blue_auto_rp": 0.6441,
            "red_coral_rp": 0.068,
            "blue_coral_rp": 0.0672,
            "red_barge_rp": 0.2528,
            "blue_barge_rp": 0.5111,
            "red_rp_1": 0.4043,
            "blue_rp_1": 0.6441,
            "red_rp_2": 0.068,
            "blue_rp_2": 0.0672,
            "red_rp_3": 0.2528,
            "blue_rp_3": 0.5111
        },
        "result": {
            "winner": "blue",
            "red_score": 39,
            "blue_score": 87,
            "red_no_foul": 39,
            "blue_no_foul": 69,
            "red_auto_points": 10,
            "blue_auto_points": 23,
            "red_teleop_points": 15,
            "blue_teleop_points": 42,
            "red_endgame_points": 14,
            "blue_endgame_points": 4,
            "red_auto_rp": true,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 6,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 1,
            "blue_auto_coral": 2,
            "red_auto_coral_points": 4,
            "blue_auto_coral_points": 14,
            "red_teleop_coral": 1,
            "blue_teleop_coral": 8,
            "red_teleop_coral_points": 3,
            "blue_teleop_coral_points": 34,
            "red_coral_l1": 0,
            "blue_coral_l1": 2,
            "red_coral_l2": 2,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 0,
            "red_coral_l4": 0,
            "blue_coral_l4": 8,
            "red_total_coral_points": 7,
            "blue_total_coral_points": 48,
            "red_processor_algae": 2,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 12,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 2,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 8,
            "red_total_algae_points": 12,
            "blue_total_algae_points": 8,
            "red_total_game_pieces": 4,
            "blue_total_game_pieces": 12,
            "red_barge_points": 14,
            "blue_barge_points": 4,
            "red_rp_1": true,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm19",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 19,
        "match_name": "Qual 19",
        "time": 1740855600,
        "predicted_time": 1740858623,
        "status": "Completed",
        "video": "pQbFHNtT0q4",
        "alliances": {
            "red": {
                "team_keys": [
                    501,
                    5962,
                    2342
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    319,
                    10156,
                    811
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.4817,
            "red_score": 69.1,
            "blue_score": 71.08,
            "red_auto_rp": 0.4403,
            "blue_auto_rp": 0.3323,
            "red_coral_rp": 0.0629,
            "blue_coral_rp": 0.0635,
            "red_barge_rp": 0.2085,
            "blue_barge_rp": 0.2746,
            "red_rp_1": 0.4403,
            "blue_rp_1": 0.3323,
            "red_rp_2": 0.0629,
            "blue_rp_2": 0.0635,
            "red_rp_3": 0.2085,
            "blue_rp_3": 0.2746
        },
        "result": {
            "winner": "red",
            "red_score": 74,
            "blue_score": 64,
            "red_no_foul": 74,
            "blue_no_foul": 64,
            "red_auto_points": 16,
            "blue_auto_points": 3,
            "red_teleop_points": 48,
            "blue_teleop_points": 57,
            "red_endgame_points": 10,
            "blue_endgame_points": 4,
            "red_auto_rp": true,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 1,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 3,
            "red_auto_coral": 1,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 7,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 6,
            "blue_teleop_coral": 3,
            "red_teleop_coral_points": 28,
            "blue_teleop_coral_points": 15,
            "red_coral_l1": 0,
            "blue_coral_l1": 0,
            "red_coral_l2": 1,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 0,
            "red_coral_l4": 6,
            "blue_coral_l4": 3,
            "red_total_coral_points": 35,
            "blue_total_coral_points": 15,
            "red_processor_algae": 0,
            "blue_processor_algae": 7,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 42,
            "red_net_algae": 5,
            "blue_net_algae": 0,
            "red_net_algae_points": 20,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 20,
            "blue_total_algae_points": 42,
            "red_total_game_pieces": 12,
            "blue_total_game_pieces": 10,
            "red_barge_points": 10,
            "blue_barge_points": 4,
            "red_rp_1": true,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm2",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 2,
        "match_name": "Qual 2",
        "time": 1740845340,
        "predicted_time": 1740846784,
        "status": "Completed",
        "video": "fqwBh5z4KUQ",
        "alliances": {
            "red": {
                "team_keys": [
                    811,
                    138,
                    9729
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    4925,
                    3566,
                    5902
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.7156,
            "red_score": 85.78,
            "blue_score": 60.94,
            "red_auto_rp": 0.4129,
            "blue_auto_rp": 0.2973,
            "red_coral_rp": 0.0501,
            "blue_coral_rp": 0.0472,
            "red_barge_rp": 0.322,
            "blue_barge_rp": 0.2421,
            "red_rp_1": 0.4129,
            "blue_rp_1": 0.2973,
            "red_rp_2": 0.0501,
            "blue_rp_2": 0.0472,
            "red_rp_3": 0.322,
            "blue_rp_3": 0.2421
        },
        "result": {
            "winner": "red",
            "red_score": 37,
            "blue_score": 30,
            "red_no_foul": 31,
            "blue_no_foul": 28,
            "red_auto_points": 9,
            "blue_auto_points": 9,
            "red_teleop_points": 16,
            "blue_teleop_points": 15,
            "red_endgame_points": 6,
            "blue_endgame_points": 4,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 6,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 1,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 3,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 4,
            "blue_teleop_coral": 3,
            "red_teleop_coral_points": 16,
            "blue_teleop_coral_points": 15,
            "red_coral_l1": 1,
            "blue_coral_l1": 0,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 1,
            "blue_coral_l3": 0,
            "red_coral_l4": 2,
            "blue_coral_l4": 3,
            "red_total_coral_points": 19,
            "blue_total_coral_points": 15,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 4,
            "blue_total_game_pieces": 3,
            "red_barge_points": 6,
            "blue_barge_points": 4,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm20",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 20,
        "match_name": "Qual 20",
        "time": 1740856080,
        "predicted_time": 1740859209,
        "status": "Completed",
        "video": "Mzf_xJXKzm4",
        "alliances": {
            "red": {
                "team_keys": [
                    3623,
                    8013,
                    6620
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    9443,
                    3467,
                    1058
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.196,
            "red_score": 84.8,
            "blue_score": 122.8,
            "red_auto_rp": 0.2511,
            "blue_auto_rp": 0.7189,
            "red_coral_rp": 0.0424,
            "blue_coral_rp": 0.0697,
            "red_barge_rp": 0.4298,
            "blue_barge_rp": 0.498,
            "red_rp_1": 0.2511,
            "blue_rp_1": 0.7189,
            "red_rp_2": 0.0424,
            "blue_rp_2": 0.0697,
            "red_rp_3": 0.4298,
            "blue_rp_3": 0.498
        },
        "result": {
            "winner": "blue",
            "red_score": 87,
            "blue_score": 143,
            "red_no_foul": 87,
            "blue_no_foul": 141,
            "red_auto_points": 13,
            "blue_auto_points": 23,
            "red_teleop_points": 58,
            "blue_teleop_points": 94,
            "red_endgame_points": 16,
            "blue_endgame_points": 24,
            "red_auto_rp": false,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": true,
            "red_barge_rp": true,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 1,
            "red_auto_leave_points": 6,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 1,
            "blue_auto_coral": 2,
            "red_auto_coral_points": 7,
            "blue_auto_coral_points": 14,
            "red_teleop_coral": 5,
            "blue_teleop_coral": 19,
            "red_teleop_coral_points": 18,
            "blue_teleop_coral_points": 74,
            "red_coral_l1": 2,
            "blue_coral_l1": 1,
            "red_coral_l2": 0,
            "blue_coral_l2": 6,
            "red_coral_l3": 1,
            "blue_coral_l3": 6,
            "red_coral_l4": 3,
            "blue_coral_l4": 8,
            "red_total_coral_points": 25,
            "blue_total_coral_points": 88,
            "red_processor_algae": 2,
            "blue_processor_algae": 2,
            "red_processor_algae_points": 12,
            "blue_processor_algae_points": 12,
            "red_net_algae": 7,
            "blue_net_algae": 2,
            "red_net_algae_points": 28,
            "blue_net_algae_points": 8,
            "red_total_algae_points": 40,
            "blue_total_algae_points": 20,
            "red_total_game_pieces": 15,
            "blue_total_game_pieces": 25,
            "red_barge_points": 16,
            "blue_barge_points": 24,
            "red_rp_1": false,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": true,
            "red_rp_3": true,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm21",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 21,
        "match_name": "Qual 21",
        "time": 1740856560,
        "predicted_time": 1740859624,
        "status": "Completed",
        "video": "NKxuqhWXJWY",
        "alliances": {
            "red": {
                "team_keys": [
                    1768,
                    7314,
                    3566
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    97,
                    1277,
                    138
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.7291,
            "red_score": 89.7,
            "blue_score": 63.04,
            "red_auto_rp": 0.5633,
            "blue_auto_rp": 0.2623,
            "red_coral_rp": 0.0631,
            "blue_coral_rp": 0.0405,
            "red_barge_rp": 0.2298,
            "blue_barge_rp": 0.285,
            "red_rp_1": 0.5633,
            "blue_rp_1": 0.2623,
            "red_rp_2": 0.0631,
            "blue_rp_2": 0.0405,
            "red_rp_3": 0.2298,
            "blue_rp_3": 0.285
        },
        "result": {
            "winner": "blue",
            "red_score": 88,
            "blue_score": 112,
            "red_no_foul": 88,
            "blue_no_foul": 106,
            "red_auto_points": 19,
            "blue_auto_points": 16,
            "red_teleop_points": 69,
            "blue_teleop_points": 64,
            "red_endgame_points": 0,
            "blue_endgame_points": 26,
            "red_auto_rp": true,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 2,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 10,
            "blue_auto_coral_points": 7,
            "red_teleop_coral": 17,
            "blue_teleop_coral": 13,
            "red_teleop_coral_points": 57,
            "blue_teleop_coral_points": 56,
            "red_coral_l1": 6,
            "blue_coral_l1": 1,
            "red_coral_l2": 3,
            "blue_coral_l2": 3,
            "red_coral_l3": 4,
            "blue_coral_l3": 0,
            "red_coral_l4": 5,
            "blue_coral_l4": 10,
            "red_total_coral_points": 67,
            "blue_total_coral_points": 63,
            "red_processor_algae": 2,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 12,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 2,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 8,
            "red_total_algae_points": 12,
            "blue_total_algae_points": 8,
            "red_total_game_pieces": 20,
            "blue_total_game_pieces": 16,
            "red_barge_points": 0,
            "blue_barge_points": 26,
            "red_rp_1": true,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm22",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 22,
        "match_name": "Qual 22",
        "time": 1740857040,
        "predicted_time": 1740860285,
        "status": "Completed",
        "video": "SEKVTjKv1hc",
        "alliances": {
            "red": {
                "team_keys": [
                    9729,
                    6328,
                    6201
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    2877,
                    4909,
                    5491
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.544,
            "red_score": 104.04,
            "blue_score": 99.28,
            "red_auto_rp": 0.6501,
            "blue_auto_rp": 0.7469,
            "red_coral_rp": 0.0662,
            "blue_coral_rp": 0.0638,
            "red_barge_rp": 0.7242,
            "blue_barge_rp": 0.6529,
            "red_rp_1": 0.6501,
            "blue_rp_1": 0.7469,
            "red_rp_2": 0.0662,
            "blue_rp_2": 0.0638,
            "red_rp_3": 0.7242,
            "blue_rp_3": 0.6529
        },
        "result": {
            "winner": "blue",
            "red_score": 113,
            "blue_score": 123,
            "red_no_foul": 113,
            "blue_no_foul": 123,
            "red_auto_points": 19,
            "blue_auto_points": 27,
            "red_teleop_points": 68,
            "blue_teleop_points": 92,
            "red_endgame_points": 26,
            "blue_endgame_points": 4,
            "red_auto_rp": true,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 1,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 6,
            "red_auto_coral": 2,
            "blue_auto_coral": 3,
            "red_auto_coral_points": 10,
            "blue_auto_coral_points": 21,
            "red_teleop_coral": 15,
            "blue_teleop_coral": 20,
            "red_teleop_coral_points": 64,
            "blue_teleop_coral_points": 80,
            "red_coral_l1": 0,
            "blue_coral_l1": 0,
            "red_coral_l2": 5,
            "blue_coral_l2": 7,
            "red_coral_l3": 1,
            "blue_coral_l3": 6,
            "red_coral_l4": 10,
            "blue_coral_l4": 10,
            "red_total_coral_points": 74,
            "blue_total_coral_points": 101,
            "red_processor_algae": 0,
            "blue_processor_algae": 2,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 12,
            "red_net_algae": 1,
            "blue_net_algae": 0,
            "red_net_algae_points": 4,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 4,
            "blue_total_algae_points": 12,
            "red_total_game_pieces": 17,
            "blue_total_game_pieces": 25,
            "red_barge_points": 26,
            "blue_barge_points": 4,
            "red_rp_1": true,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm23",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 23,
        "match_name": "Qual 23",
        "time": 1740857520,
        "predicted_time": 1740860826,
        "status": "Completed",
        "video": "t5csiZzuTQs",
        "alliances": {
            "red": {
                "team_keys": [
                    9644,
                    1512,
                    1247
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    5902,
                    8708,
                    1761
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.7063,
            "red_score": 67.83,
            "blue_score": 44.21,
            "red_auto_rp": 0.2971,
            "blue_auto_rp": 0.1861,
            "red_coral_rp": 0.0403,
            "blue_coral_rp": 0.0404,
            "red_barge_rp": 0.3484,
            "blue_barge_rp": 0.1499,
            "red_rp_1": 0.2971,
            "blue_rp_1": 0.1861,
            "red_rp_2": 0.0403,
            "blue_rp_2": 0.0404,
            "red_rp_3": 0.3484,
            "blue_rp_3": 0.1499
        },
        "result": {
            "winner": "red",
            "red_score": 61,
            "blue_score": 32,
            "red_no_foul": 61,
            "blue_no_foul": 32,
            "red_auto_points": 3,
            "blue_auto_points": 9,
            "red_teleop_points": 54,
            "blue_teleop_points": 17,
            "red_endgame_points": 4,
            "blue_endgame_points": 6,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 3,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 0,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 11,
            "blue_teleop_coral": 4,
            "red_teleop_coral_points": 54,
            "blue_teleop_coral_points": 17,
            "red_coral_l1": 0,
            "blue_coral_l1": 1,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 1,
            "blue_coral_l3": 0,
            "red_coral_l4": 10,
            "blue_coral_l4": 3,
            "red_total_coral_points": 54,
            "blue_total_coral_points": 17,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 11,
            "blue_total_game_pieces": 4,
            "red_barge_points": 4,
            "blue_barge_points": 6,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm24",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 24,
        "match_name": "Qual 24",
        "time": 1740858000,
        "predicted_time": 1740861244,
        "status": "Completed",
        "video": "upRqKBbqpyA",
        "alliances": {
            "red": {
                "team_keys": [
                    4987,
                    1721,
                    4925
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    663,
                    8410,
                    6690
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.225,
            "red_score": 33.48,
            "blue_score": 66.77,
            "red_auto_rp": 0.3584,
            "blue_auto_rp": 0.2347,
            "red_coral_rp": 0.0384,
            "blue_coral_rp": 0.0407,
            "red_barge_rp": 0.3278,
            "blue_barge_rp": 0.5931,
            "red_rp_1": 0.3584,
            "blue_rp_1": 0.2347,
            "red_rp_2": 0.0384,
            "blue_rp_2": 0.0407,
            "red_rp_3": 0.3278,
            "blue_rp_3": 0.5931
        },
        "result": {
            "winner": "blue",
            "red_score": 12,
            "blue_score": 82,
            "red_no_foul": 12,
            "blue_no_foul": 76,
            "red_auto_points": 6,
            "blue_auto_points": 16,
            "red_teleop_points": 4,
            "blue_teleop_points": 56,
            "red_endgame_points": 2,
            "blue_endgame_points": 4,
            "red_auto_rp": false,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 1,
            "red_auto_leave_points": 6,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 0,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 7,
            "red_teleop_coral": 0,
            "blue_teleop_coral": 10,
            "red_teleop_coral_points": 0,
            "blue_teleop_coral_points": 40,
            "red_coral_l1": 0,
            "blue_coral_l1": 1,
            "red_coral_l2": 0,
            "blue_coral_l2": 2,
            "red_coral_l3": 0,
            "blue_coral_l3": 3,
            "red_coral_l4": 0,
            "blue_coral_l4": 5,
            "red_total_coral_points": 0,
            "blue_total_coral_points": 47,
            "red_processor_algae": 0,
            "blue_processor_algae": 2,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 12,
            "red_net_algae": 1,
            "blue_net_algae": 1,
            "red_net_algae_points": 4,
            "blue_net_algae_points": 4,
            "red_total_algae_points": 4,
            "blue_total_algae_points": 16,
            "red_total_game_pieces": 1,
            "blue_total_game_pieces": 14,
            "red_barge_points": 2,
            "blue_barge_points": 4,
            "red_rp_1": false,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm25",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 25,
        "match_name": "Qual 25",
        "time": 1740858480,
        "predicted_time": 1740861667,
        "status": "Completed",
        "video": "fTj7YaB8FLA",
        "alliances": {
            "red": {
                "team_keys": [
                    6620,
                    10156,
                    2342
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    7314,
                    811,
                    97
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.6486,
            "red_score": 76.12,
            "blue_score": 59.61,
            "red_auto_rp": 0.3362,
            "blue_auto_rp": 0.3558,
            "red_coral_rp": 0.058,
            "blue_coral_rp": 0.0369,
            "red_barge_rp": 0.2946,
            "blue_barge_rp": 0.3611,
            "red_rp_1": 0.3362,
            "blue_rp_1": 0.3558,
            "red_rp_2": 0.058,
            "blue_rp_2": 0.0369,
            "red_rp_3": 0.2946,
            "blue_rp_3": 0.3611
        },
        "result": {
            "winner": "red",
            "red_score": 43,
            "blue_score": 42,
            "red_no_foul": 43,
            "blue_no_foul": 42,
            "red_auto_points": 10,
            "blue_auto_points": 9,
            "red_teleop_points": 31,
            "blue_teleop_points": 27,
            "red_endgame_points": 2,
            "blue_endgame_points": 6,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 3,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 1,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 7,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 7,
            "blue_teleop_coral": 9,
            "red_teleop_coral_points": 31,
            "blue_teleop_coral_points": 27,
            "red_coral_l1": 0,
            "blue_coral_l1": 6,
            "red_coral_l2": 1,
            "blue_coral_l2": 0,
            "red_coral_l3": 2,
            "blue_coral_l3": 0,
            "red_coral_l4": 5,
            "blue_coral_l4": 3,
            "red_total_coral_points": 38,
            "blue_total_coral_points": 27,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 8,
            "blue_total_game_pieces": 9,
            "red_barge_points": 2,
            "blue_barge_points": 6,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm26",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 26,
        "match_name": "Qual 26",
        "time": 1740858960,
        "predicted_time": 1740862035,
        "status": "Completed",
        "video": "r1l_2qkXPVI",
        "alliances": {
            "red": {
                "team_keys": [
                    6201,
                    1058,
                    501
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    3623,
                    9729,
                    5491
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.8223,
            "red_score": 89.69,
            "blue_score": 48.44,
            "red_auto_rp": 0.709,
            "blue_auto_rp": 0.1872,
            "red_coral_rp": 0.0588,
            "blue_coral_rp": 0.0367,
            "red_barge_rp": 0.503,
            "blue_barge_rp": 0.2952,
            "red_rp_1": 0.709,
            "blue_rp_1": 0.1872,
            "red_rp_2": 0.0588,
            "blue_rp_2": 0.0367,
            "red_rp_3": 0.503,
            "blue_rp_3": 0.2952
        },
        "result": {
            "winner": "red",
            "red_score": 80,
            "blue_score": 17,
            "red_no_foul": 80,
            "blue_no_foul": 17,
            "red_auto_points": 23,
            "blue_auto_points": 6,
            "red_teleop_points": 53,
            "blue_teleop_points": 9,
            "red_endgame_points": 4,
            "blue_endgame_points": 2,
            "red_auto_rp": true,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 6,
            "red_auto_coral": 2,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 14,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 10,
            "blue_teleop_coral": 1,
            "red_teleop_coral_points": 47,
            "blue_teleop_coral_points": 5,
            "red_coral_l1": 0,
            "blue_coral_l1": 0,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 3,
            "blue_coral_l3": 0,
            "red_coral_l4": 9,
            "blue_coral_l4": 1,
            "red_total_coral_points": 61,
            "blue_total_coral_points": 5,
            "red_processor_algae": 1,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 6,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 1,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 4,
            "red_total_algae_points": 6,
            "blue_total_algae_points": 4,
            "red_total_game_pieces": 13,
            "blue_total_game_pieces": 2,
            "red_barge_points": 4,
            "blue_barge_points": 2,
            "red_rp_1": true,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm27",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 27,
        "match_name": "Qual 27",
        "time": 1740859440,
        "predicted_time": 1740862639,
        "status": "Completed",
        "video": "GLq8e88JbTM",
        "alliances": {
            "red": {
                "team_keys": [
                    1512,
                    4909,
                    3566
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    5902,
                    3467,
                    9644
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.346,
            "red_score": 83.43,
            "blue_score": 100.58,
            "red_auto_rp": 0.3575,
            "blue_auto_rp": 0.3576,
            "red_coral_rp": 0.0588,
            "blue_coral_rp": 0.0947,
            "red_barge_rp": 0.2665,
            "blue_barge_rp": 0.2729,
            "red_rp_1": 0.3575,
            "blue_rp_1": 0.3576,
            "red_rp_2": 0.0588,
            "blue_rp_2": 0.0947,
            "red_rp_3": 0.2665,
            "blue_rp_3": 0.2729
        },
        "result": {
            "winner": "blue",
            "red_score": 91,
            "blue_score": 144,
            "red_no_foul": 91,
            "blue_no_foul": 138,
            "red_auto_points": 20,
            "blue_auto_points": 30,
            "red_teleop_points": 65,
            "blue_teleop_points": 106,
            "red_endgame_points": 6,
            "blue_endgame_points": 2,
            "red_auto_rp": false,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": true,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 1,
            "red_auto_leave_points": 6,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 2,
            "blue_auto_coral": 3,
            "red_auto_coral_points": 14,
            "blue_auto_coral_points": 21,
            "red_teleop_coral": 9,
            "blue_teleop_coral": 21,
            "red_teleop_coral_points": 45,
            "blue_teleop_coral_points": 86,
            "red_coral_l1": 0,
            "blue_coral_l1": 1,
            "red_coral_l2": 0,
            "blue_coral_l2": 5,
            "red_coral_l3": 0,
            "blue_coral_l3": 6,
            "red_coral_l4": 11,
            "blue_coral_l4": 12,
            "red_total_coral_points": 59,
            "blue_total_coral_points": 107,
            "red_processor_algae": 2,
            "blue_processor_algae": 2,
            "red_processor_algae_points": 12,
            "blue_processor_algae_points": 12,
            "red_net_algae": 2,
            "blue_net_algae": 2,
            "red_net_algae_points": 8,
            "blue_net_algae_points": 8,
            "red_total_algae_points": 20,
            "blue_total_algae_points": 20,
            "red_total_game_pieces": 15,
            "blue_total_game_pieces": 28,
            "red_barge_points": 6,
            "blue_barge_points": 2,
            "red_rp_1": false,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": true,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm28",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 28,
        "match_name": "Qual 28",
        "time": 1740859920,
        "predicted_time": 1740863291,
        "status": "Completed",
        "video": "v1Gg6SoDGtQ",
        "alliances": {
            "red": {
                "team_keys": [
                    663,
                    8708,
                    2877
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    6328,
                    9443,
                    138
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.2425,
            "red_score": 98.56,
            "blue_score": 129.22,
            "red_auto_rp": 0.4984,
            "blue_auto_rp": 0.8592,
            "red_coral_rp": 0.0403,
            "blue_coral_rp": 0.0944,
            "red_barge_rp": 0.6207,
            "blue_barge_rp": 0.7509,
            "red_rp_1": 0.4984,
            "blue_rp_1": 0.8592,
            "red_rp_2": 0.0403,
            "blue_rp_2": 0.0944,
            "red_rp_3": 0.6207,
            "blue_rp_3": 0.7509
        },
        "result": {
            "winner": "blue",
            "red_score": 84,
            "blue_score": 93,
            "red_no_foul": 82,
            "blue_no_foul": 87,
            "red_auto_points": 12,
            "blue_auto_points": 13,
            "red_teleop_points": 56,
            "blue_teleop_points": 48,
            "red_endgame_points": 14,
            "blue_endgame_points": 26,
            "red_auto_rp": true,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 1,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 1,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 3,
            "blue_auto_coral_points": 4,
            "red_teleop_coral": 9,
            "blue_teleop_coral": 7,
            "red_teleop_coral_points": 44,
            "blue_teleop_coral_points": 30,
            "red_coral_l1": 0,
            "blue_coral_l1": 1,
            "red_coral_l2": 0,
            "blue_coral_l2": 2,
            "red_coral_l3": 1,
            "blue_coral_l3": 0,
            "red_coral_l4": 8,
            "blue_coral_l4": 5,
            "red_total_coral_points": 47,
            "blue_total_coral_points": 34,
            "red_processor_algae": 0,
            "blue_processor_algae": 3,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 18,
            "red_net_algae": 3,
            "blue_net_algae": 0,
            "red_net_algae_points": 12,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 12,
            "blue_total_algae_points": 18,
            "red_total_game_pieces": 12,
            "blue_total_game_pieces": 11,
            "red_barge_points": 14,
            "blue_barge_points": 26,
            "red_rp_1": true,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm29",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 29,
        "match_name": "Qual 29",
        "time": 1740860400,
        "predicted_time": 1740863647,
        "status": "Completed",
        "video": "cFLh8VyGjYE",
        "alliances": {
            "red": {
                "team_keys": [
                    319,
                    1721,
                    8013
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    1768,
                    1761,
                    8410
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.586,
            "red_score": 93.41,
            "blue_score": 84.06,
            "red_auto_rp": 0.207,
            "blue_auto_rp": 0.5646,
            "red_coral_rp": 0.0632,
            "blue_coral_rp": 0.0598,
            "red_barge_rp": 0.4457,
            "blue_barge_rp": 0.4291,
            "red_rp_1": 0.207,
            "blue_rp_1": 0.5646,
            "red_rp_2": 0.0632,
            "blue_rp_2": 0.0598,
            "red_rp_3": 0.4457,
            "blue_rp_3": 0.4291
        },
        "result": {
            "winner": "red",
            "red_score": 83,
            "blue_score": 57,
            "red_no_foul": 71,
            "blue_no_foul": 51,
            "red_auto_points": 16,
            "blue_auto_points": 6,
            "red_teleop_points": 41,
            "blue_teleop_points": 43,
            "red_endgame_points": 14,
            "blue_endgame_points": 2,
            "red_auto_rp": true,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 6,
            "red_auto_coral": 1,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 7,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 5,
            "blue_teleop_coral": 10,
            "red_teleop_coral_points": 25,
            "blue_teleop_coral_points": 43,
            "red_coral_l1": 0,
            "blue_coral_l1": 1,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 4,
            "red_coral_l4": 6,
            "blue_coral_l4": 5,
            "red_total_coral_points": 32,
            "blue_total_coral_points": 43,
            "red_processor_algae": 2,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 12,
            "blue_processor_algae_points": 0,
            "red_net_algae": 1,
            "blue_net_algae": 0,
            "red_net_algae_points": 4,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 16,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 9,
            "blue_total_game_pieces": 10,
            "red_barge_points": 14,
            "blue_barge_points": 2,
            "red_rp_1": true,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm3",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 3,
        "match_name": "Qual 3",
        "time": 1740845880,
        "predicted_time": 1740847566,
        "status": "Completed",
        "video": "s2k3DBfoQGw",
        "alliances": {
            "red": {
                "team_keys": [
                    4987,
                    2877,
                    9443
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    3467,
                    97,
                    1512
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.4143,
            "red_score": 90.01,
            "blue_score": 99.33,
            "red_auto_rp": 0.4266,
            "blue_auto_rp": 0.4738,
            "red_coral_rp": 0.0504,
            "blue_coral_rp": 0.0515,
            "red_barge_rp": 0.3317,
            "blue_barge_rp": 0.3655,
            "red_rp_1": 0.4266,
            "blue_rp_1": 0.4738,
            "red_rp_2": 0.0504,
            "blue_rp_2": 0.0515,
            "red_rp_3": 0.3317,
            "blue_rp_3": 0.3655
        },
        "result": {
            "winner": "blue",
            "red_score": 82,
            "blue_score": 83,
            "red_no_foul": 76,
            "blue_no_foul": 77,
            "red_auto_points": 13,
            "blue_auto_points": 6,
            "red_teleop_points": 49,
            "blue_teleop_points": 67,
            "red_endgame_points": 14,
            "blue_endgame_points": 4,
            "red_auto_rp": true,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 1,
            "red_auto_leave_points": 6,
            "blue_auto_leave_points": 3,
            "red_auto_coral": 1,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 7,
            "blue_auto_coral_points": 3,
            "red_teleop_coral": 7,
            "blue_teleop_coral": 11,
            "red_teleop_coral_points": 35,
            "blue_teleop_coral_points": 51,
            "red_coral_l1": 0,
            "blue_coral_l1": 0,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 4,
            "red_coral_l4": 8,
            "blue_coral_l4": 7,
            "red_total_coral_points": 42,
            "blue_total_coral_points": 54,
            "red_processor_algae": 1,
            "blue_processor_algae": 2,
            "red_processor_algae_points": 6,
            "blue_processor_algae_points": 12,
            "red_net_algae": 2,
            "blue_net_algae": 1,
            "red_net_algae_points": 8,
            "blue_net_algae_points": 4,
            "red_total_algae_points": 14,
            "blue_total_algae_points": 16,
            "red_total_game_pieces": 11,
            "blue_total_game_pieces": 14,
            "red_barge_points": 14,
            "blue_barge_points": 4,
            "red_rp_1": true,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm30",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 30,
        "match_name": "Qual 30",
        "time": 1740860880,
        "predicted_time": 1740864015,
        "status": "Completed",
        "video": "0D5ch2Ci_uE",
        "alliances": {
            "red": {
                "team_keys": [
                    1277,
                    4987,
                    5962
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    6690,
                    4925,
                    1247
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.5831,
            "red_score": 52.8,
            "blue_score": 43.77,
            "red_auto_rp": 0.483,
            "blue_auto_rp": 0.3499,
            "red_coral_rp": 0.0375,
            "blue_coral_rp": 0.0366,
            "red_barge_rp": 0.348,
            "blue_barge_rp": 0.1639,
            "red_rp_1": 0.483,
            "blue_rp_1": 0.3499,
            "red_rp_2": 0.0375,
            "blue_rp_2": 0.0366,
            "red_rp_3": 0.348,
            "blue_rp_3": 0.1639
        },
        "result": {
            "winner": "blue",
            "red_score": 24,
            "blue_score": 34,
            "red_no_foul": 18,
            "blue_no_foul": 16,
            "red_auto_points": 9,
            "blue_auto_points": 12,
            "red_teleop_points": 5,
            "blue_teleop_points": 0,
            "red_endgame_points": 4,
            "blue_endgame_points": 4,
            "red_auto_rp": false,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 0,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 3,
            "red_teleop_coral": 1,
            "blue_teleop_coral": 0,
            "red_teleop_coral_points": 5,
            "blue_teleop_coral_points": 0,
            "red_coral_l1": 0,
            "blue_coral_l1": 0,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 0,
            "red_coral_l4": 1,
            "blue_coral_l4": 0,
            "red_total_coral_points": 5,
            "blue_total_coral_points": 3,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 1,
            "blue_total_game_pieces": 0,
            "red_barge_points": 4,
            "blue_barge_points": 4,
            "red_rp_1": false,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm31",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 31,
        "match_name": "Qual 31",
        "time": 1740861360,
        "predicted_time": 1740864614,
        "status": "Completed",
        "video": "DKlJ3xwPmLo",
        "alliances": {
            "red": {
                "team_keys": [
                    97,
                    2342,
                    9644
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    1512,
                    9729,
                    5902
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.779,
            "red_score": 82.21,
            "blue_score": 48.29,
            "red_auto_rp": 0.3423,
            "blue_auto_rp": 0.1222,
            "red_coral_rp": 0.0821,
            "blue_coral_rp": 0.0539,
            "red_barge_rp": 0.2247,
            "blue_barge_rp": 0.1301,
            "red_rp_1": 0.3423,
            "blue_rp_1": 0.1222,
            "red_rp_2": 0.0821,
            "blue_rp_2": 0.0539,
            "red_rp_3": 0.2247,
            "blue_rp_3": 0.1301
        },
        "result": {
            "winner": "red",
            "red_score": 88,
            "blue_score": 16,
            "red_no_foul": 78,
            "blue_no_foul": 16,
            "red_auto_points": 13,
            "blue_auto_points": 9,
            "red_teleop_points": 61,
            "blue_teleop_points": 5,
            "red_endgame_points": 4,
            "blue_endgame_points": 2,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 6,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 1,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 7,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 13,
            "blue_teleop_coral": 1,
            "red_teleop_coral_points": 61,
            "blue_teleop_coral_points": 5,
            "red_coral_l1": 0,
            "blue_coral_l1": 0,
            "red_coral_l2": 1,
            "blue_coral_l2": 0,
            "red_coral_l3": 2,
            "blue_coral_l3": 0,
            "red_coral_l4": 11,
            "blue_coral_l4": 1,
            "red_total_coral_points": 68,
            "blue_total_coral_points": 5,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 14,
            "blue_total_game_pieces": 1,
            "red_barge_points": 4,
            "blue_barge_points": 2,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm32",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 32,
        "match_name": "Qual 32",
        "time": 1740861840,
        "predicted_time": 1740865224,
        "status": "Completed",
        "video": "xRPX7jn0478",
        "alliances": {
            "red": {
                "team_keys": [
                    6328,
                    3467,
                    8708
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    1058,
                    811,
                    3623
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.9113,
            "red_score": 140.12,
            "blue_score": 77.41,
            "red_auto_rp": 0.9187,
            "blue_auto_rp": 0.4165,
            "red_coral_rp": 0.1967,
            "blue_coral_rp": 0.0563,
            "red_barge_rp": 0.7147,
            "blue_barge_rp": 0.2824,
            "red_rp_1": 0.9187,
            "blue_rp_1": 0.4165,
            "red_rp_2": 0.1967,
            "blue_rp_2": 0.0563,
            "red_rp_3": 0.7147,
            "blue_rp_3": 0.2824
        },
        "result": {
            "winner": "red",
            "red_score": 131,
            "blue_score": 98,
            "red_no_foul": 131,
            "blue_no_foul": 90,
            "red_auto_points": 34,
            "blue_auto_points": 16,
            "red_teleop_points": 83,
            "blue_teleop_points": 60,
            "red_endgame_points": 14,
            "blue_endgame_points": 14,
            "red_auto_rp": true,
            "blue_auto_rp": true,
            "red_coral_rp": true,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 1,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 4,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 25,
            "blue_auto_coral_points": 7,
            "red_teleop_coral": 15,
            "blue_teleop_coral": 7,
            "red_teleop_coral_points": 59,
            "blue_teleop_coral_points": 32,
            "red_coral_l1": 0,
            "blue_coral_l1": 1,
            "red_coral_l2": 6,
            "blue_coral_l2": 0,
            "red_coral_l3": 6,
            "blue_coral_l3": 0,
            "red_coral_l4": 7,
            "blue_coral_l4": 7,
            "red_total_coral_points": 84,
            "blue_total_coral_points": 39,
            "red_processor_algae": 4,
            "blue_processor_algae": 2,
            "red_processor_algae_points": 24,
            "blue_processor_algae_points": 12,
            "red_net_algae": 0,
            "blue_net_algae": 4,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 16,
            "red_total_algae_points": 24,
            "blue_total_algae_points": 28,
            "red_total_game_pieces": 23,
            "blue_total_game_pieces": 14,
            "red_barge_points": 14,
            "blue_barge_points": 14,
            "red_rp_1": true,
            "blue_rp_1": true,
            "red_rp_2": true,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm33",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 33,
        "match_name": "Qual 33",
        "time": 1740862320,
        "predicted_time": 1740865690,
        "status": "Completed",
        "video": "IcSRVQ9krmk",
        "alliances": {
            "red": {
                "team_keys": [
                    138,
                    1721,
                    8410
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    501,
                    9443,
                    7314
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.5215,
            "red_score": 67.14,
            "blue_score": 64.82,
            "red_auto_rp": 0.6355,
            "blue_auto_rp": 0.5726,
            "red_coral_rp": 0.0356,
            "blue_coral_rp": 0.0527,
            "red_barge_rp": 0.5363,
            "blue_barge_rp": 0.3028,
            "red_rp_1": 0.6355,
            "blue_rp_1": 0.5726,
            "red_rp_2": 0.0356,
            "blue_rp_2": 0.0527,
            "red_rp_3": 0.5363,
            "blue_rp_3": 0.3028
        },
        "result": {
            "winner": "red",
            "red_score": 91,
            "blue_score": 66,
            "red_no_foul": 91,
            "blue_no_foul": 60,
            "red_auto_points": 9,
            "blue_auto_points": 9,
            "red_teleop_points": 78,
            "blue_teleop_points": 43,
            "red_endgame_points": 4,
            "blue_endgame_points": 8,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 0,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 11,
            "blue_teleop_coral": 8,
            "red_teleop_coral_points": 48,
            "blue_teleop_coral_points": 21,
            "red_coral_l1": 0,
            "blue_coral_l1": 6,
            "red_coral_l2": 1,
            "blue_coral_l2": 0,
            "red_coral_l3": 5,
            "blue_coral_l3": 1,
            "red_coral_l4": 5,
            "blue_coral_l4": 1,
            "red_total_coral_points": 48,
            "blue_total_coral_points": 21,
            "red_processor_algae": 5,
            "blue_processor_algae": 1,
            "red_processor_algae_points": 30,
            "blue_processor_algae_points": 6,
            "red_net_algae": 0,
            "blue_net_algae": 4,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 16,
            "red_total_algae_points": 30,
            "blue_total_algae_points": 22,
            "red_total_game_pieces": 16,
            "blue_total_game_pieces": 13,
            "red_barge_points": 4,
            "blue_barge_points": 8,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm34",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 34,
        "match_name": "Qual 34",
        "time": 1740862800,
        "predicted_time": 1740866087,
        "status": "Completed",
        "video": "1HEAeczl1uk",
        "alliances": {
            "red": {
                "team_keys": [
                    4909,
                    319,
                    4925
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    10156,
                    1277,
                    6690
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.6825,
            "red_score": 78.97,
            "blue_score": 58.37,
            "red_auto_rp": 0.491,
            "blue_auto_rp": 0.2504,
            "red_coral_rp": 0.0831,
            "blue_coral_rp": 0.0358,
            "red_barge_rp": 0.2906,
            "blue_barge_rp": 0.1461,
            "red_rp_1": 0.491,
            "blue_rp_1": 0.2504,
            "red_rp_2": 0.0831,
            "blue_rp_2": 0.0358,
            "red_rp_3": 0.2906,
            "blue_rp_3": 0.1461
        },
        "result": {
            "winner": "red",
            "red_score": 143,
            "blue_score": 50,
            "red_no_foul": 139,
            "blue_no_foul": 46,
            "red_auto_points": 23,
            "blue_auto_points": 3,
            "red_teleop_points": 90,
            "blue_teleop_points": 35,
            "red_endgame_points": 26,
            "blue_endgame_points": 8,
            "red_auto_rp": true,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 3,
            "red_auto_coral": 2,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 14,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 17,
            "blue_teleop_coral": 9,
            "red_teleop_coral_points": 74,
            "blue_teleop_coral_points": 21,
            "red_coral_l1": 1,
            "blue_coral_l1": 8,
            "red_coral_l2": 2,
            "blue_coral_l2": 0,
            "red_coral_l3": 4,
            "blue_coral_l3": 0,
            "red_coral_l4": 12,
            "blue_coral_l4": 1,
            "red_total_coral_points": 88,
            "blue_total_coral_points": 21,
            "red_processor_algae": 2,
            "blue_processor_algae": 1,
            "red_processor_algae_points": 12,
            "blue_processor_algae_points": 6,
            "red_net_algae": 1,
            "blue_net_algae": 2,
            "red_net_algae_points": 4,
            "blue_net_algae_points": 8,
            "red_total_algae_points": 16,
            "blue_total_algae_points": 14,
            "red_total_game_pieces": 22,
            "blue_total_game_pieces": 12,
            "red_barge_points": 26,
            "blue_barge_points": 8,
            "red_rp_1": true,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm35",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 35,
        "match_name": "Qual 35",
        "time": 1740863280,
        "predicted_time": 1740866704,
        "status": "Completed",
        "video": "vnpCbS0ih14",
        "alliances": {
            "red": {
                "team_keys": [
                    5491,
                    3566,
                    6201
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    5962,
                    1768,
                    6620
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.3915,
            "red_score": 60.22,
            "blue_score": 72.09,
            "red_auto_rp": 0.3835,
            "blue_auto_rp": 0.3238,
            "red_coral_rp": 0.0339,
            "blue_coral_rp": 0.0562,
            "red_barge_rp": 0.3034,
            "blue_barge_rp": 0.3439,
            "red_rp_1": 0.3835,
            "blue_rp_1": 0.3238,
            "red_rp_2": 0.0339,
            "blue_rp_2": 0.0562,
            "red_rp_3": 0.3034,
            "blue_rp_3": 0.3439
        },
        "result": {
            "winner": "blue",
            "red_score": 17,
            "blue_score": 82,
            "red_no_foul": 15,
            "blue_no_foul": 80,
            "red_auto_points": 6,
            "blue_auto_points": 16,
            "red_teleop_points": 3,
            "blue_teleop_points": 60,
            "red_endgame_points": 6,
            "blue_endgame_points": 4,
            "red_auto_rp": false,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 6,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 0,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 7,
            "red_teleop_coral": 1,
            "blue_teleop_coral": 14,
            "red_teleop_coral_points": 3,
            "blue_teleop_coral_points": 60,
            "red_coral_l1": 0,
            "blue_coral_l1": 0,
            "red_coral_l2": 1,
            "blue_coral_l2": 3,
            "red_coral_l3": 0,
            "blue_coral_l3": 4,
            "red_coral_l4": 0,
            "blue_coral_l4": 8,
            "red_total_coral_points": 3,
            "blue_total_coral_points": 67,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 1,
            "blue_total_game_pieces": 15,
            "red_barge_points": 6,
            "blue_barge_points": 4,
            "red_rp_1": false,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm36",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 36,
        "match_name": "Qual 36",
        "time": 1740863760,
        "predicted_time": 1740867252,
        "status": "Completed",
        "video": "7iNdFVdF0Uw",
        "alliances": {
            "red": {
                "team_keys": [
                    1247,
                    663,
                    4987
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    2877,
                    8013,
                    1761
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.18,
            "red_score": 52.15,
            "blue_score": 92.97,
            "red_auto_rp": 0.6037,
            "blue_auto_rp": 0.401,
            "red_coral_rp": 0.0353,
            "blue_coral_rp": 0.0383,
            "red_barge_rp": 0.4428,
            "blue_barge_rp": 0.6011,
            "red_rp_1": 0.6037,
            "blue_rp_1": 0.401,
            "red_rp_2": 0.0353,
            "blue_rp_2": 0.0383,
            "red_rp_3": 0.4428,
            "blue_rp_3": 0.6011
        },
        "result": {
            "winner": "blue",
            "red_score": 65,
            "blue_score": 103,
            "red_no_foul": 65,
            "blue_no_foul": 97,
            "red_auto_points": 13,
            "blue_auto_points": 30,
            "red_teleop_points": 50,
            "blue_teleop_points": 61,
            "red_endgame_points": 2,
            "blue_endgame_points": 6,
            "red_auto_rp": true,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 6,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 1,
            "blue_auto_coral": 3,
            "red_auto_coral_points": 7,
            "blue_auto_coral_points": 21,
            "red_teleop_coral": 10,
            "blue_teleop_coral": 12,
            "red_teleop_coral_points": 50,
            "blue_teleop_coral_points": 57,
            "red_coral_l1": 0,
            "blue_coral_l1": 0,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 3,
            "red_coral_l4": 11,
            "blue_coral_l4": 12,
            "red_total_coral_points": 57,
            "blue_total_coral_points": 78,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 1,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 4,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 4,
            "red_total_game_pieces": 11,
            "blue_total_game_pieces": 16,
            "red_barge_points": 2,
            "blue_barge_points": 6,
            "red_rp_1": true,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm37",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 37,
        "match_name": "Qual 37",
        "time": 1740864240,
        "predicted_time": 1740867977,
        "status": "Completed",
        "video": "_RynXN93tzU",
        "alliances": {
            "red": {
                "team_keys": [
                    9729,
                    97,
                    9443
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    1721,
                    9644,
                    6328
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.1563,
            "red_score": 56.3,
            "blue_score": 101.7,
            "red_auto_rp": 0.1724,
            "blue_auto_rp": 0.5411,
            "red_coral_rp": 0.0498,
            "blue_coral_rp": 0.1128,
            "red_barge_rp": 0.4098,
            "blue_barge_rp": 0.6138,
            "red_rp_1": 0.1724,
            "blue_rp_1": 0.5411,
            "red_rp_2": 0.0498,
            "blue_rp_2": 0.1128,
            "red_rp_3": 0.4098,
            "blue_rp_3": 0.6138
        },
        "result": {
            "winner": "blue",
            "red_score": 36,
            "blue_score": 160,
            "red_no_foul": 30,
            "blue_no_foul": 142,
            "red_auto_points": 3,
            "blue_auto_points": 13,
            "red_teleop_points": 27,
            "blue_teleop_points": 115,
            "red_endgame_points": 0,
            "blue_endgame_points": 14,
            "red_auto_rp": false,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": true,
            "red_barge_rp": false,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 1,
            "red_auto_leave_points": 3,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 0,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 4,
            "red_teleop_coral": 3,
            "blue_teleop_coral": 20,
            "red_teleop_coral_points": 7,
            "blue_teleop_coral_points": 83,
            "red_coral_l1": 2,
            "blue_coral_l1": 0,
            "red_coral_l2": 1,
            "blue_coral_l2": 6,
            "red_coral_l3": 0,
            "blue_coral_l3": 7,
            "red_coral_l4": 0,
            "blue_coral_l4": 8,
            "red_total_coral_points": 7,
            "blue_total_coral_points": 87,
            "red_processor_algae": 2,
            "blue_processor_algae": 4,
            "red_processor_algae_points": 12,
            "blue_processor_algae_points": 24,
            "red_net_algae": 2,
            "blue_net_algae": 2,
            "red_net_algae_points": 8,
            "blue_net_algae_points": 8,
            "red_total_algae_points": 20,
            "blue_total_algae_points": 32,
            "red_total_game_pieces": 7,
            "blue_total_game_pieces": 27,
            "red_barge_points": 0,
            "blue_barge_points": 14,
            "red_rp_1": false,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": true,
            "red_rp_3": false,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm38",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 38,
        "match_name": "Qual 38",
        "time": 1740864720,
        "predicted_time": 1740868570,
        "status": "Completed",
        "video": "wrsFG8TuLMI",
        "alliances": {
            "red": {
                "team_keys": [
                    8410,
                    5902,
                    2342
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    8708,
                    10156,
                    1058
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.5073,
            "red_score": 76.32,
            "blue_score": 75.53,
            "red_auto_rp": 0.4154,
            "blue_auto_rp": 0.5773,
            "red_coral_rp": 0.0764,
            "blue_coral_rp": 0.0754,
            "red_barge_rp": 0.2158,
            "blue_barge_rp": 0.4044,
            "red_rp_1": 0.4154,
            "blue_rp_1": 0.5773,
            "red_rp_2": 0.0764,
            "blue_rp_2": 0.0754,
            "red_rp_3": 0.2158,
            "blue_rp_3": 0.4044
        },
        "result": {
            "winner": "blue",
            "red_score": 57,
            "blue_score": 78,
            "red_no_foul": 57,
            "blue_no_foul": 72,
            "red_auto_points": 6,
            "blue_auto_points": 13,
            "red_teleop_points": 35,
            "blue_teleop_points": 55,
            "red_endgame_points": 16,
            "blue_endgame_points": 4,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 6,
            "blue_auto_leave_points": 6,
            "red_auto_coral": 0,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 7,
            "red_teleop_coral": 7,
            "blue_teleop_coral": 17,
            "red_teleop_coral_points": 35,
            "blue_teleop_coral_points": 55,
            "red_coral_l1": 0,
            "blue_coral_l1": 10,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 0,
            "red_coral_l4": 7,
            "blue_coral_l4": 8,
            "red_total_coral_points": 35,
            "blue_total_coral_points": 62,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 7,
            "blue_total_game_pieces": 18,
            "red_barge_points": 16,
            "blue_barge_points": 4,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm39",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 39,
        "match_name": "Qual 39",
        "time": 1740865200,
        "predicted_time": 1740868991,
        "status": "Completed",
        "video": "nOW-dNpns6o",
        "alliances": {
            "red": {
                "team_keys": [
                    4925,
                    501,
                    3467
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    5491,
                    319,
                    1768
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.4555,
            "red_score": 87.93,
            "blue_score": 92.73,
            "red_auto_rp": 0.7361,
            "blue_auto_rp": 0.5092,
            "red_coral_rp": 0.1613,
            "blue_coral_rp": 0.0781,
            "red_barge_rp": 0.233,
            "blue_barge_rp": 0.2981,
            "red_rp_1": 0.7361,
            "blue_rp_1": 0.5092,
            "red_rp_2": 0.1613,
            "blue_rp_2": 0.0781,
            "red_rp_3": 0.233,
            "blue_rp_3": 0.2981
        },
        "result": {
            "winner": "red",
            "red_score": 150,
            "blue_score": 117,
            "red_no_foul": 150,
            "blue_no_foul": 117,
            "red_auto_points": 33,
            "blue_auto_points": 9,
            "red_teleop_points": 103,
            "blue_teleop_points": 102,
            "red_endgame_points": 14,
            "blue_endgame_points": 6,
            "red_auto_rp": true,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 1,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 6,
            "red_auto_coral": 4,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 24,
            "blue_auto_coral_points": 3,
            "red_teleop_coral": 18,
            "blue_teleop_coral": 11,
            "red_teleop_coral_points": 75,
            "blue_teleop_coral_points": 48,
            "red_coral_l1": 2,
            "blue_coral_l1": 0,
            "red_coral_l2": 2,
            "blue_coral_l2": 1,
            "red_coral_l3": 5,
            "blue_coral_l3": 5,
            "red_coral_l4": 12,
            "blue_coral_l4": 5,
            "red_total_coral_points": 99,
            "blue_total_coral_points": 51,
            "red_processor_algae": 0,
            "blue_processor_algae": 9,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 54,
            "red_net_algae": 7,
            "blue_net_algae": 0,
            "red_net_algae_points": 28,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 28,
            "blue_total_algae_points": 54,
            "red_total_game_pieces": 28,
            "blue_total_game_pieces": 20,
            "red_barge_points": 14,
            "blue_barge_points": 6,
            "red_rp_1": true,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm4",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 4,
        "match_name": "Qual 4",
        "time": 1740846420,
        "predicted_time": 1740848117,
        "status": "Completed",
        "video": "P-grIWvYc9c",
        "alliances": {
            "red": {
                "team_keys": [
                    1277,
                    3623,
                    8410
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    9644,
                    8013,
                    6201
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.3637,
            "red_score": 83.92,
            "blue_score": 98.98,
            "red_auto_rp": 0.3975,
            "blue_auto_rp": 0.4731,
            "red_coral_rp": 0.0497,
            "blue_coral_rp": 0.0515,
            "red_barge_rp": 0.3113,
            "blue_barge_rp": 0.365,
            "red_rp_1": 0.3975,
            "blue_rp_1": 0.4731,
            "red_rp_2": 0.0497,
            "blue_rp_2": 0.0515,
            "red_rp_3": 0.3113,
            "blue_rp_3": 0.365
        },
        "result": {
            "winner": "blue",
            "red_score": 43,
            "blue_score": 91,
            "red_no_foul": 37,
            "blue_no_foul": 85,
            "red_auto_points": 3,
            "blue_auto_points": 13,
            "red_teleop_points": 20,
            "blue_teleop_points": 56,
            "red_endgame_points": 14,
            "blue_endgame_points": 16,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 3,
            "blue_auto_leave_points": 6,
            "red_auto_coral": 0,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 7,
            "red_teleop_coral": 4,
            "blue_teleop_coral": 9,
            "red_teleop_coral_points": 16,
            "blue_teleop_coral_points": 42,
            "red_coral_l1": 1,
            "blue_coral_l1": 1,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 1,
            "blue_coral_l3": 0,
            "red_coral_l4": 2,
            "blue_coral_l4": 9,
            "red_total_coral_points": 16,
            "blue_total_coral_points": 49,
            "red_processor_algae": 0,
            "blue_processor_algae": 1,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 6,
            "red_net_algae": 1,
            "blue_net_algae": 2,
            "red_net_algae_points": 4,
            "blue_net_algae_points": 8,
            "red_total_algae_points": 4,
            "blue_total_algae_points": 14,
            "red_total_game_pieces": 5,
            "blue_total_game_pieces": 13,
            "red_barge_points": 14,
            "blue_barge_points": 16,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm40",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 40,
        "match_name": "Qual 40",
        "time": 1740865680,
        "predicted_time": 1740869420,
        "status": "Completed",
        "video": "PNtEiRyss_M",
        "alliances": {
            "red": {
                "team_keys": [
                    4987,
                    6201,
                    3623
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    7314,
                    2877,
                    1277
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.221,
            "red_score": 56.51,
            "blue_score": 90.43,
            "red_auto_rp": 0.5578,
            "blue_auto_rp": 0.5648,
            "red_coral_rp": 0.0328,
            "blue_coral_rp": 0.035,
            "red_barge_rp": 0.4612,
            "blue_barge_rp": 0.4704,
            "red_rp_1": 0.5578,
            "blue_rp_1": 0.5648,
            "red_rp_2": 0.0328,
            "blue_rp_2": 0.035,
            "red_rp_3": 0.4612,
            "blue_rp_3": 0.4704
        },
        "result": {
            "winner": "blue",
            "red_score": 34,
            "blue_score": 97,
            "red_no_foul": 34,
            "blue_no_foul": 73,
            "red_auto_points": 9,
            "blue_auto_points": 19,
            "red_teleop_points": 21,
            "blue_teleop_points": 50,
            "red_endgame_points": 4,
            "blue_endgame_points": 4,
            "red_auto_rp": false,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 0,
            "blue_auto_coral": 2,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 10,
            "red_teleop_coral": 7,
            "blue_teleop_coral": 9,
            "red_teleop_coral_points": 17,
            "blue_teleop_coral_points": 44,
            "red_coral_l1": 6,
            "blue_coral_l1": 0,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 1,
            "red_coral_l4": 1,
            "blue_coral_l4": 9,
            "red_total_coral_points": 17,
            "blue_total_coral_points": 54,
            "red_processor_algae": 0,
            "blue_processor_algae": 1,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 6,
            "red_net_algae": 1,
            "blue_net_algae": 0,
            "red_net_algae_points": 4,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 4,
            "blue_total_algae_points": 6,
            "red_total_game_pieces": 8,
            "blue_total_game_pieces": 11,
            "red_barge_points": 4,
            "blue_barge_points": 4,
            "red_rp_1": false,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm41",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 41,
        "match_name": "Qual 41",
        "time": 1740866160,
        "predicted_time": 1740869883,
        "status": "Completed",
        "video": "t3rTsNlghQM",
        "alliances": {
            "red": {
                "team_keys": [
                    138,
                    6620,
                    1512
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    8013,
                    1247,
                    4909
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.0887,
            "red_score": 62.21,
            "blue_score": 124.94,
            "red_auto_rp": 0.2238,
            "blue_auto_rp": 0.7881,
            "red_coral_rp": 0.0332,
            "blue_coral_rp": 0.0541,
            "red_barge_rp": 0.3364,
            "blue_barge_rp": 0.5651,
            "red_rp_1": 0.2238,
            "blue_rp_1": 0.7881,
            "red_rp_2": 0.0332,
            "blue_rp_2": 0.0541,
            "red_rp_3": 0.3364,
            "blue_rp_3": 0.5651
        },
        "result": {
            "winner": "blue",
            "red_score": 38,
            "blue_score": 117,
            "red_no_foul": 38,
            "blue_no_foul": 117,
            "red_auto_points": 16,
            "blue_auto_points": 30,
            "red_teleop_points": 8,
            "blue_teleop_points": 71,
            "red_endgame_points": 14,
            "blue_endgame_points": 16,
            "red_auto_rp": true,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 1,
            "blue_auto_coral": 3,
            "red_auto_coral_points": 7,
            "blue_auto_coral_points": 21,
            "red_teleop_coral": 1,
            "blue_teleop_coral": 14,
            "red_teleop_coral_points": 2,
            "blue_teleop_coral_points": 63,
            "red_coral_l1": 1,
            "blue_coral_l1": 1,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 4,
            "red_coral_l4": 1,
            "blue_coral_l4": 12,
            "red_total_coral_points": 9,
            "blue_total_coral_points": 84,
            "red_processor_algae": 1,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 6,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 2,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 8,
            "red_total_algae_points": 6,
            "blue_total_algae_points": 8,
            "red_total_game_pieces": 3,
            "blue_total_game_pieces": 19,
            "red_barge_points": 14,
            "blue_barge_points": 16,
            "red_rp_1": true,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm42",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 42,
        "match_name": "Qual 42",
        "time": 1740866640,
        "predicted_time": 1740870489,
        "status": "Completed",
        "video": "oRznPxTe4Ts",
        "alliances": {
            "red": {
                "team_keys": [
                    3566,
                    1761,
                    663
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    5962,
                    6690,
                    811
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.4611,
            "red_score": 44.62,
            "blue_score": 48.82,
            "red_auto_rp": 0.2582,
            "blue_auto_rp": 0.394,
            "red_coral_rp": 0.0336,
            "blue_coral_rp": 0.0339,
            "red_barge_rp": 0.1482,
            "blue_barge_rp": 0.1039,
            "red_rp_1": 0.2582,
            "blue_rp_1": 0.394,
            "red_rp_2": 0.0336,
            "blue_rp_2": 0.0339,
            "red_rp_3": 0.1482,
            "blue_rp_3": 0.1039
        },
        "result": {
            "winner": "red",
            "red_score": 71,
            "blue_score": 31,
            "red_no_foul": 71,
            "blue_no_foul": 31,
            "red_auto_points": 9,
            "blue_auto_points": 9,
            "red_teleop_points": 58,
            "blue_teleop_points": 18,
            "red_endgame_points": 4,
            "blue_endgame_points": 4,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 0,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 12,
            "blue_teleop_coral": 3,
            "red_teleop_coral_points": 54,
            "blue_teleop_coral_points": 12,
            "red_coral_l1": 0,
            "blue_coral_l1": 1,
            "red_coral_l2": 3,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 0,
            "red_coral_l4": 9,
            "blue_coral_l4": 2,
            "red_total_coral_points": 54,
            "blue_total_coral_points": 12,
            "red_processor_algae": 0,
            "blue_processor_algae": 1,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 6,
            "red_net_algae": 1,
            "blue_net_algae": 0,
            "red_net_algae_points": 4,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 4,
            "blue_total_algae_points": 6,
            "red_total_game_pieces": 13,
            "blue_total_game_pieces": 4,
            "red_barge_points": 4,
            "blue_barge_points": 4,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm43",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 43,
        "match_name": "Qual 43",
        "time": 1740867120,
        "predicted_time": 1740870923,
        "status": "Completed",
        "video": "ya7GpVga_o8",
        "alliances": {
            "red": {
                "team_keys": [
                    9443,
                    8410,
                    10156
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    1058,
                    2342,
                    5491
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.3121,
            "red_score": 62.08,
            "blue_score": 83.36,
            "red_auto_rp": 0.1866,
            "blue_auto_rp": 0.3836,
            "red_coral_rp": 0.0465,
            "blue_coral_rp": 0.07,
            "red_barge_rp": 0.4843,
            "blue_barge_rp": 0.2151,
            "red_rp_1": 0.1866,
            "blue_rp_1": 0.3836,
            "red_rp_2": 0.0465,
            "blue_rp_2": 0.07,
            "red_rp_3": 0.4843,
            "blue_rp_3": 0.2151
        },
        "result": {
            "winner": "blue",
            "red_score": 43,
            "blue_score": 84,
            "red_no_foul": 43,
            "blue_no_foul": 84,
            "red_auto_points": 9,
            "blue_auto_points": 20,
            "red_teleop_points": 28,
            "blue_teleop_points": 50,
            "red_endgame_points": 6,
            "blue_endgame_points": 14,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 6,
            "red_auto_coral": 0,
            "blue_auto_coral": 2,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 14,
            "red_teleop_coral": 8,
            "blue_teleop_coral": 10,
            "red_teleop_coral_points": 28,
            "blue_teleop_coral_points": 50,
            "red_coral_l1": 4,
            "blue_coral_l1": 0,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 0,
            "red_coral_l4": 4,
            "blue_coral_l4": 12,
            "red_total_coral_points": 28,
            "blue_total_coral_points": 64,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 8,
            "blue_total_game_pieces": 12,
            "red_barge_points": 6,
            "blue_barge_points": 14,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm44",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 44,
        "match_name": "Qual 44",
        "time": 1740867600,
        "predicted_time": 1740871347,
        "status": "Completed",
        "video": "nz-S14fxx44",
        "alliances": {
            "red": {
                "team_keys": [
                    2877,
                    4925,
                    9644
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    3623,
                    501,
                    1721
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.815,
            "red_score": 101.47,
            "blue_score": 61.54,
            "red_auto_rp": 0.7168,
            "blue_auto_rp": 0.3076,
            "red_coral_rp": 0.0675,
            "blue_coral_rp": 0.045,
            "red_barge_rp": 0.4581,
            "blue_barge_rp": 0.3356,
            "red_rp_1": 0.7168,
            "blue_rp_1": 0.3076,
            "red_rp_2": 0.0675,
            "blue_rp_2": 0.045,
            "red_rp_3": 0.4581,
            "blue_rp_3": 0.3356
        },
        "result": {
            "winner": "red",
            "red_score": 111,
            "blue_score": 31,
            "red_no_foul": 111,
            "blue_no_foul": 31,
            "red_auto_points": 19,
            "blue_auto_points": 9,
            "red_teleop_points": 78,
            "blue_teleop_points": 20,
            "red_endgame_points": 14,
            "blue_endgame_points": 2,
            "red_auto_rp": true,
            "blue_auto_rp": false,
            "red_coral_rp": true,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 2,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 10,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 22,
            "blue_teleop_coral": 4,
            "red_teleop_coral_points": 78,
            "blue_teleop_coral_points": 20,
            "red_coral_l1": 5,
            "blue_coral_l1": 0,
            "red_coral_l2": 6,
            "blue_coral_l2": 0,
            "red_coral_l3": 5,
            "blue_coral_l3": 0,
            "red_coral_l4": 7,
            "blue_coral_l4": 4,
            "red_total_coral_points": 88,
            "blue_total_coral_points": 20,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 23,
            "blue_total_game_pieces": 4,
            "red_barge_points": 14,
            "blue_barge_points": 2,
            "red_rp_1": true,
            "blue_rp_1": false,
            "red_rp_2": true,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm45",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 45,
        "match_name": "Qual 45",
        "time": 1740868080,
        "predicted_time": 1740871763,
        "status": "Completed",
        "video": "kyagIt9pgX8",
        "alliances": {
            "red": {
                "team_keys": [
                    7314,
                    1247,
                    5902
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    1768,
                    9729,
                    8013
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.1425,
            "red_score": 56.31,
            "blue_score": 104.63,
            "red_auto_rp": 0.5513,
            "blue_auto_rp": 0.5183,
            "red_coral_rp": 0.0462,
            "blue_coral_rp": 0.0515,
            "red_barge_rp": 0.1932,
            "blue_barge_rp": 0.5001,
            "red_rp_1": 0.5513,
            "blue_rp_1": 0.5183,
            "red_rp_2": 0.0462,
            "blue_rp_2": 0.0515,
            "red_rp_3": 0.1932,
            "blue_rp_3": 0.5001
        },
        "result": {
            "winner": "blue",
            "red_score": 19,
            "blue_score": 121,
            "red_no_foul": 17,
            "blue_no_foul": 103,
            "red_auto_points": 6,
            "blue_auto_points": 9,
            "red_teleop_points": 7,
            "blue_teleop_points": 78,
            "red_endgame_points": 4,
            "blue_endgame_points": 16,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 6,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 0,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 2,
            "blue_teleop_coral": 20,
            "red_teleop_coral_points": 7,
            "blue_teleop_coral_points": 78,
            "red_coral_l1": 1,
            "blue_coral_l1": 2,
            "red_coral_l2": 0,
            "blue_coral_l2": 5,
            "red_coral_l3": 0,
            "blue_coral_l3": 6,
            "red_coral_l4": 1,
            "blue_coral_l4": 7,
            "red_total_coral_points": 7,
            "blue_total_coral_points": 78,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 2,
            "blue_total_game_pieces": 20,
            "red_barge_points": 4,
            "blue_barge_points": 16,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm46",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 46,
        "match_name": "Qual 46",
        "time": 1740868560,
        "predicted_time": 1740872226,
        "status": "Completed",
        "video": "M3fe8E-PBzo",
        "alliances": {
            "red": {
                "team_keys": [
                    1277,
                    1761,
                    3467
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    3566,
                    5962,
                    6328
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.5759,
            "red_score": 97.45,
            "blue_score": 89.21,
            "red_auto_rp": 0.4881,
            "blue_auto_rp": 0.7303,
            "red_coral_rp": 0.1552,
            "blue_coral_rp": 0.1056,
            "red_barge_rp": 0.2342,
            "blue_barge_rp": 0.4264,
            "red_rp_1": 0.4881,
            "blue_rp_1": 0.7303,
            "red_rp_2": 0.1552,
            "blue_rp_2": 0.1056,
            "red_rp_3": 0.2342,
            "blue_rp_3": 0.4264
        },
        "result": {
            "winner": "blue",
            "red_score": 84,
            "blue_score": 94,
            "red_no_foul": 84,
            "blue_no_foul": 94,
            "red_auto_points": 16,
            "blue_auto_points": 13,
            "red_teleop_points": 54,
            "blue_teleop_points": 67,
            "red_endgame_points": 14,
            "blue_endgame_points": 14,
            "red_auto_rp": true,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 1,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 7,
            "blue_auto_coral_points": 4,
            "red_teleop_coral": 12,
            "blue_teleop_coral": 14,
            "red_teleop_coral_points": 54,
            "blue_teleop_coral_points": 67,
            "red_coral_l1": 1,
            "blue_coral_l1": 0,
            "red_coral_l2": 1,
            "blue_coral_l2": 1,
            "red_coral_l3": 1,
            "blue_coral_l3": 3,
            "red_coral_l4": 10,
            "blue_coral_l4": 11,
            "red_total_coral_points": 61,
            "blue_total_coral_points": 71,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 13,
            "blue_total_game_pieces": 15,
            "red_barge_points": 14,
            "blue_barge_points": 14,
            "red_rp_1": true,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm47",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 47,
        "match_name": "Qual 47",
        "time": 1740869040,
        "predicted_time": 1740873005,
        "status": "Completed",
        "video": "SuusMbttNlY",
        "alliances": {
            "red": {
                "team_keys": [
                    6690,
                    4987,
                    1512
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    811,
                    6201,
                    6620
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.2974,
            "red_score": 32.3,
            "blue_score": 55.45,
            "red_auto_rp": 0.2313,
            "blue_auto_rp": 0.3303,
            "red_coral_rp": 0.0319,
            "blue_coral_rp": 0.0318,
            "red_barge_rp": 0.0803,
            "blue_barge_rp": 0.4428,
            "red_rp_1": 0.2313,
            "blue_rp_1": 0.3303,
            "red_rp_2": 0.0319,
            "blue_rp_2": 0.0318,
            "red_rp_3": 0.0803,
            "blue_rp_3": 0.4428
        },
        "result": {
            "winner": "blue",
            "red_score": 15,
            "blue_score": 30,
            "red_no_foul": 13,
            "blue_no_foul": 30,
            "red_auto_points": 9,
            "blue_auto_points": 9,
            "red_teleop_points": 0,
            "blue_teleop_points": 15,
            "red_endgame_points": 4,
            "blue_endgame_points": 6,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 0,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 0,
            "blue_teleop_coral": 6,
            "red_teleop_coral_points": 0,
            "blue_teleop_coral_points": 15,
            "red_coral_l1": 0,
            "blue_coral_l1": 5,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 0,
            "red_coral_l4": 0,
            "blue_coral_l4": 1,
            "red_total_coral_points": 0,
            "blue_total_coral_points": 15,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 0,
            "blue_total_game_pieces": 6,
            "red_barge_points": 4,
            "blue_barge_points": 6,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm48",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 48,
        "match_name": "Qual 48",
        "time": 1740869520,
        "predicted_time": 1740873603,
        "status": "Completed",
        "video": "rn548DaEUJs",
        "alliances": {
            "red": {
                "team_keys": [
                    319,
                    138,
                    8708
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    4909,
                    97,
                    663
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.4345,
            "red_score": 96.58,
            "blue_score": 103.68,
            "red_auto_rp": 0.6482,
            "blue_auto_rp": 0.4061,
            "red_coral_rp": 0.069,
            "blue_coral_rp": 0.0482,
            "red_barge_rp": 0.6376,
            "blue_barge_rp": 0.4969,
            "red_rp_1": 0.6482,
            "blue_rp_1": 0.4061,
            "red_rp_2": 0.069,
            "blue_rp_2": 0.0482,
            "red_rp_3": 0.6376,
            "blue_rp_3": 0.4969
        },
        "result": {
            "winner": "blue",
            "red_score": 87,
            "blue_score": 148,
            "red_no_foul": 87,
            "blue_no_foul": 138,
            "red_auto_points": 9,
            "blue_auto_points": 9,
            "red_teleop_points": 64,
            "blue_teleop_points": 115,
            "red_endgame_points": 14,
            "blue_endgame_points": 14,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 0,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 9,
            "blue_teleop_coral": 23,
            "red_teleop_coral_points": 40,
            "blue_teleop_coral_points": 95,
            "red_coral_l1": 1,
            "blue_coral_l1": 2,
            "red_coral_l2": 1,
            "blue_coral_l2": 5,
            "red_coral_l3": 0,
            "blue_coral_l3": 4,
            "red_coral_l4": 7,
            "blue_coral_l4": 12,
            "red_total_coral_points": 40,
            "blue_total_coral_points": 95,
            "red_processor_algae": 4,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 24,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 5,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 20,
            "red_total_algae_points": 24,
            "blue_total_algae_points": 20,
            "red_total_game_pieces": 13,
            "blue_total_game_pieces": 28,
            "red_barge_points": 14,
            "blue_barge_points": 14,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm49",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 49,
        "match_name": "Qual 49",
        "time": 1740870000,
        "predicted_time": 1740874036,
        "status": "Completed",
        "video": "94NdJFVvYoE",
        "alliances": {
            "red": {
                "team_keys": [
                    1247,
                    1768,
                    10156
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    8410,
                    9644,
                    9729
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.6096,
            "red_score": 80.47,
            "blue_score": 68.47,
            "red_auto_rp": 0.443,
            "blue_auto_rp": 0.1924,
            "red_coral_rp": 0.0451,
            "blue_coral_rp": 0.0962,
            "red_barge_rp": 0.2033,
            "blue_barge_rp": 0.4952,
            "red_rp_1": 0.443,
            "blue_rp_1": 0.1924,
            "red_rp_2": 0.0451,
            "blue_rp_2": 0.0962,
            "red_rp_3": 0.2033,
            "blue_rp_3": 0.4952
        },
        "result": {
            "winner": "red",
            "red_score": 84,
            "blue_score": 77,
            "red_no_foul": 74,
            "blue_no_foul": 77,
            "red_auto_points": 16,
            "blue_auto_points": 12,
            "red_teleop_points": 42,
            "blue_teleop_points": 59,
            "red_endgame_points": 16,
            "blue_endgame_points": 6,
            "red_auto_rp": true,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 1,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 7,
            "blue_auto_coral_points": 3,
            "red_teleop_coral": 10,
            "blue_teleop_coral": 13,
            "red_teleop_coral_points": 42,
            "blue_teleop_coral_points": 59,
            "red_coral_l1": 2,
            "blue_coral_l1": 2,
            "red_coral_l2": 1,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 0,
            "red_coral_l4": 8,
            "blue_coral_l4": 11,
            "red_total_coral_points": 49,
            "blue_total_coral_points": 62,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 11,
            "blue_total_game_pieces": 13,
            "red_barge_points": 16,
            "blue_barge_points": 6,
            "red_rp_1": true,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm5",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 5,
        "match_name": "Qual 5",
        "time": 1740846960,
        "predicted_time": 1740848897,
        "status": "Completed",
        "video": "k3AkjNb9r24",
        "alliances": {
            "red": {
                "team_keys": [
                    2342,
                    1768,
                    6690
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    1247,
                    501,
                    6328
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.4688,
            "red_score": 99.88,
            "blue_score": 103.24,
            "red_auto_rp": 0.4742,
            "blue_auto_rp": 0.4913,
            "red_coral_rp": 0.0515,
            "blue_coral_rp": 0.0519,
            "red_barge_rp": 0.3658,
            "blue_barge_rp": 0.3783,
            "red_rp_1": 0.4742,
            "blue_rp_1": 0.4913,
            "red_rp_2": 0.0515,
            "blue_rp_2": 0.0519,
            "red_rp_3": 0.3658,
            "blue_rp_3": 0.3783
        },
        "result": {
            "winner": "red",
            "red_score": 98,
            "blue_score": 76,
            "red_no_foul": 84,
            "blue_no_foul": 76,
            "red_auto_points": 13,
            "blue_auto_points": 16,
            "red_teleop_points": 67,
            "blue_teleop_points": 56,
            "red_endgame_points": 4,
            "blue_endgame_points": 4,
            "red_auto_rp": false,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 6,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 1,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 7,
            "blue_auto_coral_points": 7,
            "red_teleop_coral": 14,
            "blue_teleop_coral": 13,
            "red_teleop_coral_points": 61,
            "blue_teleop_coral_points": 52,
            "red_coral_l1": 0,
            "blue_coral_l1": 0,
            "red_coral_l2": 2,
            "blue_coral_l2": 4,
            "red_coral_l3": 5,
            "blue_coral_l3": 5,
            "red_coral_l4": 8,
            "blue_coral_l4": 5,
            "red_total_coral_points": 68,
            "blue_total_coral_points": 59,
            "red_processor_algae": 1,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 6,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 1,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 4,
            "red_total_algae_points": 6,
            "blue_total_algae_points": 4,
            "red_total_game_pieces": 16,
            "blue_total_game_pieces": 15,
            "red_barge_points": 4,
            "blue_barge_points": 4,
            "red_rp_1": false,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm50",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 50,
        "match_name": "Qual 50",
        "time": 1740870480,
        "predicted_time": 1740874564,
        "status": "Completed",
        "video": "7QZg2UZ26Uc",
        "alliances": {
            "red": {
                "team_keys": [
                    1721,
                    5491,
                    3467
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    2342,
                    4925,
                    7314
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.7022,
            "red_score": 92.03,
            "blue_score": 68.94,
            "red_auto_rp": 0.402,
            "blue_auto_rp": 0.4697,
            "red_coral_rp": 0.1916,
            "blue_coral_rp": 0.0592,
            "red_barge_rp": 0.564,
            "blue_barge_rp": 0.4356,
            "red_rp_1": 0.402,
            "blue_rp_1": 0.4697,
            "red_rp_2": 0.1916,
            "blue_rp_2": 0.0592,
            "red_rp_3": 0.564,
            "blue_rp_3": 0.4356
        },
        "result": {
            "winner": "red",
            "red_score": 124,
            "blue_score": 73,
            "red_no_foul": 120,
            "blue_no_foul": 69,
            "red_auto_points": 13,
            "blue_auto_points": 16,
            "red_teleop_points": 91,
            "blue_teleop_points": 53,
            "red_endgame_points": 16,
            "blue_endgame_points": 0,
            "red_auto_rp": false,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 6,
            "blue_auto_leave_points": 6,
            "red_auto_coral": 1,
            "blue_auto_coral": 2,
            "red_auto_coral_points": 7,
            "blue_auto_coral_points": 10,
            "red_teleop_coral": 14,
            "blue_teleop_coral": 8,
            "red_teleop_coral_points": 55,
            "blue_teleop_coral_points": 29,
            "red_coral_l1": 0,
            "blue_coral_l1": 3,
            "red_coral_l2": 5,
            "blue_coral_l2": 0,
            "red_coral_l3": 5,
            "blue_coral_l3": 2,
            "red_coral_l4": 5,
            "blue_coral_l4": 4,
            "red_total_coral_points": 62,
            "blue_total_coral_points": 39,
            "red_processor_algae": 6,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 36,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 6,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 24,
            "red_total_algae_points": 36,
            "blue_total_algae_points": 24,
            "red_total_game_pieces": 21,
            "blue_total_game_pieces": 15,
            "red_barge_points": 16,
            "blue_barge_points": 0,
            "red_rp_1": false,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm51",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 51,
        "match_name": "Qual 51",
        "time": 1740870960,
        "predicted_time": 1740875182,
        "status": "Completed",
        "video": "KW7WLXjobjc",
        "alliances": {
            "red": {
                "team_keys": [
                    1761,
                    6690,
                    501
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    9443,
                    1512,
                    3623
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.4664,
            "red_score": 39.74,
            "blue_score": 43.36,
            "red_auto_rp": 0.2169,
            "blue_auto_rp": 0.1529,
            "red_coral_rp": 0.0273,
            "blue_coral_rp": 0.0457,
            "red_barge_rp": 0.0375,
            "blue_barge_rp": 0.3084,
            "red_rp_1": 0.2169,
            "blue_rp_1": 0.1529,
            "red_rp_2": 0.0273,
            "blue_rp_2": 0.0457,
            "red_rp_3": 0.0375,
            "blue_rp_3": 0.3084
        },
        "result": {
            "winner": "blue",
            "red_score": 27,
            "blue_score": 39,
            "red_no_foul": 27,
            "blue_no_foul": 39,
            "red_auto_points": 9,
            "blue_auto_points": 6,
            "red_teleop_points": 8,
            "blue_teleop_points": 19,
            "red_endgame_points": 10,
            "blue_endgame_points": 14,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 6,
            "red_auto_coral": 0,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 2,
            "blue_teleop_coral": 5,
            "red_teleop_coral_points": 8,
            "blue_teleop_coral_points": 19,
            "red_coral_l1": 0,
            "blue_coral_l1": 2,
            "red_coral_l2": 1,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 0,
            "red_coral_l4": 1,
            "blue_coral_l4": 3,
            "red_total_coral_points": 8,
            "blue_total_coral_points": 19,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 2,
            "blue_total_game_pieces": 5,
            "red_barge_points": 10,
            "blue_barge_points": 14,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm52",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 52,
        "match_name": "Qual 52",
        "time": 1740871440,
        "predicted_time": 1740875585,
        "status": "Completed",
        "video": "wLV-QL-Smic",
        "alliances": {
            "red": {
                "team_keys": [
                    6620,
                    3566,
                    8708
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    8013,
                    6328,
                    4987
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.1008,
            "red_score": 50.31,
            "blue_score": 109.23,
            "red_auto_rp": 0.2359,
            "blue_auto_rp": 0.8258,
            "red_coral_rp": 0.0424,
            "blue_coral_rp": 0.1022,
            "red_barge_rp": 0.3456,
            "blue_barge_rp": 0.8164,
            "red_rp_1": 0.2359,
            "blue_rp_1": 0.8258,
            "red_rp_2": 0.0424,
            "blue_rp_2": 0.1022,
            "red_rp_3": 0.3456,
            "blue_rp_3": 0.8164
        },
        "result": {
            "winner": "blue",
            "red_score": 59,
            "blue_score": 111,
            "red_no_foul": 57,
            "blue_no_foul": 103,
            "red_auto_points": 9,
            "blue_auto_points": 31,
            "red_teleop_points": 42,
            "blue_teleop_points": 66,
            "red_endgame_points": 6,
            "blue_endgame_points": 6,
            "red_auto_rp": false,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 0,
            "blue_auto_coral": 4,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 22,
            "red_teleop_coral": 6,
            "blue_teleop_coral": 12,
            "red_teleop_coral_points": 26,
            "blue_teleop_coral_points": 48,
            "red_coral_l1": 1,
            "blue_coral_l1": 1,
            "red_coral_l2": 0,
            "blue_coral_l2": 4,
            "red_coral_l3": 1,
            "blue_coral_l3": 5,
            "red_coral_l4": 4,
            "blue_coral_l4": 6,
            "red_total_coral_points": 26,
            "blue_total_coral_points": 70,
            "red_processor_algae": 2,
            "blue_processor_algae": 1,
            "red_processor_algae_points": 12,
            "blue_processor_algae_points": 6,
            "red_net_algae": 1,
            "blue_net_algae": 3,
            "red_net_algae_points": 4,
            "blue_net_algae_points": 12,
            "red_total_algae_points": 16,
            "blue_total_algae_points": 18,
            "red_total_game_pieces": 9,
            "blue_total_game_pieces": 20,
            "red_barge_points": 6,
            "blue_barge_points": 6,
            "red_rp_1": false,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm53",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 53,
        "match_name": "Qual 53",
        "time": 1740871920,
        "predicted_time": 1740876016,
        "status": "Completed",
        "video": "MwHT2D1nVgY",
        "alliances": {
            "red": {
                "team_keys": [
                    319,
                    5962,
                    97
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    2877,
                    5902,
                    6201
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.3277,
            "red_score": 68.93,
            "blue_score": 88.28,
            "red_auto_rp": 0.2422,
            "blue_auto_rp": 0.5693,
            "red_coral_rp": 0.043,
            "blue_coral_rp": 0.0683,
            "red_barge_rp": 0.35,
            "blue_barge_rp": 0.4056,
            "red_rp_1": 0.2422,
            "blue_rp_1": 0.5693,
            "red_rp_2": 0.043,
            "blue_rp_2": 0.0683,
            "red_rp_3": 0.35,
            "blue_rp_3": 0.4056
        },
        "result": {
            "winner": "blue",
            "red_score": 53,
            "blue_score": 123,
            "red_no_foul": 53,
            "blue_no_foul": 107,
            "red_auto_points": 9,
            "blue_auto_points": 30,
            "red_teleop_points": 40,
            "blue_teleop_points": 73,
            "red_endgame_points": 4,
            "blue_endgame_points": 4,
            "red_auto_rp": false,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 0,
            "blue_auto_coral": 3,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 21,
            "red_teleop_coral": 2,
            "blue_teleop_coral": 11,
            "red_teleop_coral_points": 10,
            "blue_teleop_coral_points": 49,
            "red_coral_l1": 0,
            "blue_coral_l1": 1,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 3,
            "red_coral_l4": 2,
            "blue_coral_l4": 10,
            "red_total_coral_points": 10,
            "blue_total_coral_points": 70,
            "red_processor_algae": 5,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 30,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 6,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 24,
            "red_total_algae_points": 30,
            "blue_total_algae_points": 24,
            "red_total_game_pieces": 7,
            "blue_total_game_pieces": 20,
            "red_barge_points": 4,
            "blue_barge_points": 4,
            "red_rp_1": false,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm54",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 54,
        "match_name": "Qual 54",
        "time": 1740872400,
        "predicted_time": 1740876497,
        "status": "Completed",
        "video": "URVsQYs7M0k",
        "alliances": {
            "red": {
                "team_keys": [
                    811,
                    1277,
                    4909
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    1058,
                    138,
                    663
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.393,
            "red_score": 95.82,
            "blue_score": 107.52,
            "red_auto_rp": 0.3711,
            "blue_auto_rp": 0.6896,
            "red_coral_rp": 0.0454,
            "blue_coral_rp": 0.0464,
            "red_barge_rp": 0.4818,
            "blue_barge_rp": 0.8222,
            "red_rp_1": 0.3711,
            "blue_rp_1": 0.6896,
            "red_rp_2": 0.0454,
            "blue_rp_2": 0.0464,
            "red_rp_3": 0.4818,
            "blue_rp_3": 0.8222
        },
        "result": {
            "winner": "red",
            "red_score": 102,
            "blue_score": 98,
            "red_no_foul": 102,
            "blue_no_foul": 98,
            "red_auto_points": 23,
            "blue_auto_points": 23,
            "red_teleop_points": 65,
            "blue_teleop_points": 49,
            "red_endgame_points": 14,
            "blue_endgame_points": 26,
            "red_auto_rp": true,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 2,
            "blue_auto_coral": 2,
            "red_auto_coral_points": 14,
            "blue_auto_coral_points": 14,
            "red_teleop_coral": 14,
            "blue_teleop_coral": 12,
            "red_teleop_coral_points": 65,
            "blue_teleop_coral_points": 49,
            "red_coral_l1": 0,
            "blue_coral_l1": 1,
            "red_coral_l2": 1,
            "blue_coral_l2": 4,
            "red_coral_l3": 3,
            "blue_coral_l3": 0,
            "red_coral_l4": 12,
            "blue_coral_l4": 9,
            "red_total_coral_points": 79,
            "blue_total_coral_points": 63,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 16,
            "blue_total_game_pieces": 14,
            "red_barge_points": 14,
            "blue_barge_points": 26,
            "red_rp_1": true,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm55",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 55,
        "match_name": "Qual 55",
        "time": 1740872880,
        "predicted_time": 1740876924,
        "status": "Completed",
        "video": "NrbnlB-V_Aw",
        "alliances": {
            "red": {
                "team_keys": [
                    1721,
                    7314,
                    10156
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    1761,
                    9443,
                    1247
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.4573,
            "red_score": 43.89,
            "blue_score": 48.5,
            "red_auto_rp": 0.1828,
            "blue_auto_rp": 0.3939,
            "red_coral_rp": 0.0389,
            "blue_coral_rp": 0.041,
            "red_barge_rp": 0.2204,
            "blue_barge_rp": 0.2848,
            "red_rp_1": 0.1828,
            "blue_rp_1": 0.3939,
            "red_rp_2": 0.0389,
            "blue_rp_2": 0.041,
            "red_rp_3": 0.2204,
            "blue_rp_3": 0.2848
        },
        "result": {
            "winner": "red",
            "red_score": 100,
            "blue_score": 31,
            "red_no_foul": 54,
            "blue_no_foul": 31,
            "red_auto_points": 12,
            "blue_auto_points": 9,
            "red_teleop_points": 40,
            "blue_teleop_points": 16,
            "red_endgame_points": 2,
            "blue_endgame_points": 6,
            "red_auto_rp": true,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 1,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 3,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 8,
            "blue_teleop_coral": 0,
            "red_teleop_coral_points": 16,
            "blue_teleop_coral_points": 0,
            "red_coral_l1": 8,
            "blue_coral_l1": 0,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 0,
            "red_coral_l4": 0,
            "blue_coral_l4": 0,
            "red_total_coral_points": 19,
            "blue_total_coral_points": 0,
            "red_processor_algae": 4,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 24,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 4,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 16,
            "red_total_algae_points": 24,
            "blue_total_algae_points": 16,
            "red_total_game_pieces": 12,
            "blue_total_game_pieces": 4,
            "red_barge_points": 2,
            "blue_barge_points": 6,
            "red_rp_1": true,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm56",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 56,
        "match_name": "Qual 56",
        "time": 1740925200,
        "predicted_time": 1740925757,
        "status": "Completed",
        "video": "g3nA93__WUw",
        "alliances": {
            "red": {
                "team_keys": [
                    1512,
                    8708,
                    1768
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    9729,
                    4987,
                    501
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.8246,
            "red_score": 76.66,
            "blue_score": 34.99,
            "red_auto_rp": 0.2714,
            "blue_auto_rp": 0.2793,
            "red_coral_rp": 0.0635,
            "blue_coral_rp": 0.0259,
            "red_barge_rp": 0.493,
            "blue_barge_rp": 0.0657,
            "red_rp_1": 0.2714,
            "blue_rp_1": 0.2793,
            "red_rp_2": 0.0635,
            "blue_rp_2": 0.0259,
            "red_rp_3": 0.493,
            "blue_rp_3": 0.0657
        },
        "result": {
            "winner": "red",
            "red_score": 82,
            "blue_score": 35,
            "red_no_foul": 76,
            "blue_no_foul": 35,
            "red_auto_points": 9,
            "blue_auto_points": 9,
            "red_teleop_points": 51,
            "blue_teleop_points": 20,
            "red_endgame_points": 16,
            "blue_endgame_points": 6,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 6,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 1,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 3,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 10,
            "blue_teleop_coral": 2,
            "red_teleop_coral_points": 41,
            "blue_teleop_coral_points": 10,
            "red_coral_l1": 2,
            "blue_coral_l1": 0,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 3,
            "blue_coral_l3": 0,
            "red_coral_l4": 5,
            "blue_coral_l4": 2,
            "red_total_coral_points": 44,
            "blue_total_coral_points": 10,
            "red_processor_algae": 1,
            "blue_processor_algae": 1,
            "red_processor_algae_points": 6,
            "blue_processor_algae_points": 6,
            "red_net_algae": 1,
            "blue_net_algae": 1,
            "red_net_algae_points": 4,
            "blue_net_algae_points": 4,
            "red_total_algae_points": 10,
            "blue_total_algae_points": 10,
            "red_total_game_pieces": 12,
            "blue_total_game_pieces": 4,
            "red_barge_points": 16,
            "blue_barge_points": 6,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm57",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 57,
        "match_name": "Qual 57",
        "time": 1740925680,
        "predicted_time": 1740926192,
        "status": "Completed",
        "video": "PFCEJIlsvBM",
        "alliances": {
            "red": {
                "team_keys": [
                    6328,
                    3623,
                    5902
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    3566,
                    8410,
                    319
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.5865,
            "red_score": 94.64,
            "blue_score": 85.23,
            "red_auto_rp": 0.6014,
            "blue_auto_rp": 0.3269,
            "red_coral_rp": 0.1311,
            "blue_coral_rp": 0.0408,
            "red_barge_rp": 0.56,
            "blue_barge_rp": 0.4361,
            "red_rp_1": 0.6014,
            "blue_rp_1": 0.3269,
            "red_rp_2": 0.1311,
            "blue_rp_2": 0.0408,
            "red_rp_3": 0.56,
            "blue_rp_3": 0.4361
        },
        "result": {
            "winner": "red",
            "red_score": 120,
            "blue_score": 48,
            "red_no_foul": 116,
            "blue_no_foul": 48,
            "red_auto_points": 23,
            "blue_auto_points": 9,
            "red_teleop_points": 77,
            "blue_teleop_points": 33,
            "red_endgame_points": 16,
            "blue_endgame_points": 6,
            "red_auto_rp": true,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 2,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 14,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 16,
            "blue_teleop_coral": 7,
            "red_teleop_coral_points": 65,
            "blue_teleop_coral_points": 25,
            "red_coral_l1": 0,
            "blue_coral_l1": 0,
            "red_coral_l2": 5,
            "blue_coral_l2": 5,
            "red_coral_l3": 5,
            "blue_coral_l3": 0,
            "red_coral_l4": 8,
            "blue_coral_l4": 2,
            "red_total_coral_points": 79,
            "blue_total_coral_points": 25,
            "red_processor_algae": 2,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 12,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 2,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 8,
            "red_total_algae_points": 12,
            "blue_total_algae_points": 8,
            "red_total_game_pieces": 20,
            "blue_total_game_pieces": 9,
            "red_barge_points": 16,
            "blue_barge_points": 6,
            "red_rp_1": true,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm58",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 58,
        "match_name": "Qual 58",
        "time": 1740926160,
        "predicted_time": 1740926607,
        "status": "Completed",
        "video": "oFB1XybxOMI",
        "alliances": {
            "red": {
                "team_keys": [
                    2342,
                    811,
                    663
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    4909,
                    6201,
                    3467
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.0661,
            "red_score": 86.2,
            "blue_score": 157.51,
            "red_auto_rp": 0.3953,
            "blue_auto_rp": 0.8655,
            "red_coral_rp": 0.0435,
            "blue_coral_rp": 0.1831,
            "red_barge_rp": 0.4915,
            "blue_barge_rp": 0.8332,
            "red_rp_1": 0.3953,
            "blue_rp_1": 0.8655,
            "red_rp_2": 0.0435,
            "blue_rp_2": 0.1831,
            "red_rp_3": 0.4915,
            "blue_rp_3": 0.8332
        },
        "result": {
            "winner": "blue",
            "red_score": 105,
            "blue_score": 176,
            "red_no_foul": 105,
            "blue_no_foul": 174,
            "red_auto_points": 16,
            "blue_auto_points": 51,
            "red_teleop_points": 85,
            "blue_teleop_points": 109,
            "red_endgame_points": 4,
            "blue_endgame_points": 14,
            "red_auto_rp": true,
            "blue_auto_rp": true,
            "red_coral_rp": true,
            "blue_coral_rp": true,
            "red_barge_rp": false,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 1,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 1,
            "blue_auto_coral": 6,
            "red_auto_coral_points": 7,
            "blue_auto_coral_points": 42,
            "red_teleop_coral": 16,
            "blue_teleop_coral": 24,
            "red_teleop_coral_points": 65,
            "blue_teleop_coral_points": 89,
            "red_coral_l1": 0,
            "blue_coral_l1": 3,
            "red_coral_l2": 5,
            "blue_coral_l2": 7,
            "red_coral_l3": 5,
            "blue_coral_l3": 8,
            "red_coral_l4": 7,
            "blue_coral_l4": 12,
            "red_total_coral_points": 72,
            "blue_total_coral_points": 131,
            "red_processor_algae": 2,
            "blue_processor_algae": 2,
            "red_processor_algae_points": 12,
            "blue_processor_algae_points": 12,
            "red_net_algae": 2,
            "blue_net_algae": 2,
            "red_net_algae_points": 8,
            "blue_net_algae_points": 8,
            "red_total_algae_points": 20,
            "blue_total_algae_points": 20,
            "red_total_game_pieces": 21,
            "blue_total_game_pieces": 34,
            "red_barge_points": 4,
            "blue_barge_points": 14,
            "red_rp_1": true,
            "blue_rp_1": true,
            "red_rp_2": true,
            "blue_rp_2": true,
            "red_rp_3": false,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm59",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 59,
        "match_name": "Qual 59",
        "time": 1740926640,
        "predicted_time": 1740927060,
        "status": "Completed",
        "video": "em42DSuy4qQ",
        "alliances": {
            "red": {
                "team_keys": [
                    6620,
                    5491,
                    6690
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    5962,
                    138,
                    9644
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.1194,
            "red_score": 33.43,
            "blue_score": 87.22,
            "red_auto_rp": 0.0794,
            "blue_auto_rp": 0.6437,
            "red_coral_rp": 0.0266,
            "blue_coral_rp": 0.0883,
            "red_barge_rp": 0.108,
            "blue_barge_rp": 0.4544,
            "red_rp_1": 0.0794,
            "blue_rp_1": 0.6437,
            "red_rp_2": 0.0266,
            "blue_rp_2": 0.0883,
            "red_rp_3": 0.108,
            "blue_rp_3": 0.4544
        },
        "result": {
            "winner": "blue",
            "red_score": 13,
            "blue_score": 120,
            "red_no_foul": 13,
            "blue_no_foul": 106,
            "red_auto_points": 9,
            "blue_auto_points": 23,
            "red_teleop_points": 0,
            "blue_teleop_points": 69,
            "red_endgame_points": 4,
            "blue_endgame_points": 14,
            "red_auto_rp": false,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 6,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 1,
            "blue_auto_coral": 2,
            "red_auto_coral_points": 3,
            "blue_auto_coral_points": 14,
            "red_teleop_coral": 0,
            "blue_teleop_coral": 18,
            "red_teleop_coral_points": 0,
            "blue_teleop_coral_points": 69,
            "red_coral_l1": 0,
            "blue_coral_l1": 2,
            "red_coral_l2": 0,
            "blue_coral_l2": 5,
            "red_coral_l3": 0,
            "blue_coral_l3": 5,
            "red_coral_l4": 0,
            "blue_coral_l4": 8,
            "red_total_coral_points": 3,
            "blue_total_coral_points": 83,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 0,
            "blue_total_game_pieces": 20,
            "red_barge_points": 4,
            "blue_barge_points": 14,
            "red_rp_1": false,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm6",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 6,
        "match_name": "Qual 6",
        "time": 1740847500,
        "predicted_time": 1740849485,
        "status": "Completed",
        "video": "Cg550KF47QU",
        "alliances": {
            "red": {
                "team_keys": [
                    1058,
                    7314,
                    4909
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    8708,
                    1721,
                    5962
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.6419,
            "red_score": 96.31,
            "blue_score": 80.59,
            "red_auto_rp": 0.4606,
            "blue_auto_rp": 0.3823,
            "red_coral_rp": 0.0512,
            "blue_coral_rp": 0.0493,
            "red_barge_rp": 0.3559,
            "blue_barge_rp": 0.3007,
            "red_rp_1": 0.4606,
            "blue_rp_1": 0.3823,
            "red_rp_2": 0.0512,
            "blue_rp_2": 0.0493,
            "red_rp_3": 0.3559,
            "blue_rp_3": 0.3007
        },
        "result": {
            "winner": "red",
            "red_score": 103,
            "blue_score": 31,
            "red_no_foul": 103,
            "blue_no_foul": 31,
            "red_auto_points": 30,
            "blue_auto_points": 9,
            "red_teleop_points": 69,
            "blue_teleop_points": 20,
            "red_endgame_points": 4,
            "blue_endgame_points": 2,
            "red_auto_rp": true,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 3,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 21,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 17,
            "blue_teleop_coral": 4,
            "red_teleop_coral_points": 63,
            "blue_teleop_coral_points": 20,
            "red_coral_l1": 3,
            "blue_coral_l1": 0,
            "red_coral_l2": 4,
            "blue_coral_l2": 0,
            "red_coral_l3": 5,
            "blue_coral_l3": 0,
            "red_coral_l4": 8,
            "blue_coral_l4": 4,
            "red_total_coral_points": 84,
            "blue_total_coral_points": 20,
            "red_processor_algae": 1,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 6,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 6,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 21,
            "blue_total_game_pieces": 4,
            "red_barge_points": 4,
            "blue_barge_points": 2,
            "red_rp_1": true,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm60",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 60,
        "match_name": "Qual 60",
        "time": 1740927120,
        "predicted_time": 1740927604,
        "status": "Completed",
        "video": "JGCtslfl7Uo",
        "alliances": {
            "red": {
                "team_keys": [
                    97,
                    2877,
                    1058
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    1277,
                    4925,
                    8013
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.7057,
            "red_score": 103.99,
            "blue_score": 80.44,
            "red_auto_rp": 0.7323,
            "blue_auto_rp": 0.6752,
            "red_coral_rp": 0.0648,
            "blue_coral_rp": 0.0389,
            "red_barge_rp": 0.5654,
            "blue_barge_rp": 0.7116,
            "red_rp_1": 0.7323,
            "blue_rp_1": 0.6752,
            "red_rp_2": 0.0648,
            "blue_rp_2": 0.0389,
            "red_rp_3": 0.5654,
            "blue_rp_3": 0.7116
        },
        "result": {
            "winner": "red",
            "red_score": 122,
            "blue_score": 107,
            "red_no_foul": 122,
            "blue_no_foul": 101,
            "red_auto_points": 44,
            "blue_auto_points": 16,
            "red_teleop_points": 62,
            "blue_teleop_points": 71,
            "red_endgame_points": 16,
            "blue_endgame_points": 14,
            "red_auto_rp": true,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 5,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 35,
            "blue_auto_coral_points": 7,
            "red_teleop_coral": 12,
            "blue_teleop_coral": 16,
            "red_teleop_coral_points": 50,
            "blue_teleop_coral_points": 59,
            "red_coral_l1": 2,
            "blue_coral_l1": 4,
            "red_coral_l2": 0,
            "blue_coral_l2": 2,
            "red_coral_l3": 4,
            "blue_coral_l3": 5,
            "red_coral_l4": 11,
            "blue_coral_l4": 6,
            "red_total_coral_points": 85,
            "blue_total_coral_points": 66,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 3,
            "blue_net_algae": 3,
            "red_net_algae_points": 12,
            "blue_net_algae_points": 12,
            "red_total_algae_points": 12,
            "blue_total_algae_points": 12,
            "red_total_game_pieces": 20,
            "blue_total_game_pieces": 20,
            "red_barge_points": 16,
            "blue_barge_points": 14,
            "red_rp_1": true,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm61",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 61,
        "match_name": "Qual 61",
        "time": 1740927600,
        "predicted_time": 1740928103,
        "status": "Completed",
        "video": "1XRbV2HZOlk",
        "alliances": {
            "red": {
                "team_keys": [
                    1512,
                    6328,
                    8410
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    7314,
                    4987,
                    319
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.7956,
            "red_score": 95.78,
            "blue_score": 59.18,
            "red_auto_rp": 0.6908,
            "blue_auto_rp": 0.4124,
            "red_coral_rp": 0.0834,
            "blue_coral_rp": 0.0396,
            "red_barge_rp": 0.7971,
            "blue_barge_rp": 0.1025,
            "red_rp_1": 0.6908,
            "blue_rp_1": 0.4124,
            "red_rp_2": 0.0834,
            "blue_rp_2": 0.0396,
            "red_rp_3": 0.7971,
            "blue_rp_3": 0.1025
        },
        "result": {
            "winner": "red",
            "red_score": 101,
            "blue_score": 44,
            "red_no_foul": 93,
            "blue_no_foul": 44,
            "red_auto_points": 20,
            "blue_auto_points": 9,
            "red_teleop_points": 57,
            "blue_teleop_points": 31,
            "red_endgame_points": 16,
            "blue_endgame_points": 4,
            "red_auto_rp": true,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 2,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 11,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 10,
            "blue_teleop_coral": 9,
            "red_teleop_coral_points": 45,
            "blue_teleop_coral_points": 23,
            "red_coral_l1": 0,
            "blue_coral_l1": 7,
            "red_coral_l2": 1,
            "blue_coral_l2": 0,
            "red_coral_l3": 5,
            "blue_coral_l3": 1,
            "red_coral_l4": 6,
            "blue_coral_l4": 1,
            "red_total_coral_points": 56,
            "blue_total_coral_points": 23,
            "red_processor_algae": 2,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 12,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 2,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 8,
            "red_total_algae_points": 12,
            "blue_total_algae_points": 8,
            "red_total_game_pieces": 14,
            "blue_total_game_pieces": 11,
            "red_barge_points": 16,
            "blue_barge_points": 4,
            "red_rp_1": true,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm62",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 62,
        "match_name": "Qual 62",
        "time": 1740928080,
        "predicted_time": 1740928691,
        "status": "Completed",
        "video": "pSO_qXN75mQ",
        "alliances": {
            "red": {
                "team_keys": [
                    1247,
                    3566,
                    9729
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": [
                    9729
                ]
            },
            "blue": {
                "team_keys": [
                    10156,
                    663,
                    501
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.3128,
            "red_score": 42.35,
            "blue_score": 63.54,
            "red_auto_rp": 0.3569,
            "blue_auto_rp": 0.3433,
            "red_coral_rp": 0.0262,
            "blue_coral_rp": 0.0366,
            "red_barge_rp": 0.202,
            "blue_barge_rp": 0.1714,
            "red_rp_1": 0.3569,
            "blue_rp_1": 0.3433,
            "red_rp_2": 0.0262,
            "blue_rp_2": 0.0366,
            "red_rp_3": 0.202,
            "blue_rp_3": 0.1714
        },
        "result": {
            "winner": "blue",
            "red_score": 23,
            "blue_score": 74,
            "red_no_foul": 23,
            "blue_no_foul": 52,
            "red_auto_points": 6,
            "blue_auto_points": 16,
            "red_teleop_points": 11,
            "blue_teleop_points": 36,
            "red_endgame_points": 6,
            "blue_endgame_points": 0,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 6,
            "blue_auto_leave_points": 6,
            "red_auto_coral": 0,
            "blue_auto_coral": 2,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 10,
            "red_teleop_coral": 3,
            "blue_teleop_coral": 9,
            "red_teleop_coral_points": 11,
            "blue_teleop_coral_points": 36,
            "red_coral_l1": 0,
            "blue_coral_l1": 3,
            "red_coral_l2": 1,
            "blue_coral_l2": 0,
            "red_coral_l3": 2,
            "blue_coral_l3": 0,
            "red_coral_l4": 0,
            "blue_coral_l4": 7,
            "red_total_coral_points": 11,
            "blue_total_coral_points": 46,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 3,
            "blue_total_game_pieces": 10,
            "red_barge_points": 6,
            "blue_barge_points": 0,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm63",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 63,
        "match_name": "Qual 63",
        "time": 1740928560,
        "predicted_time": 1740929112,
        "status": "Completed",
        "video": "tjYU1AzkVNM",
        "alliances": {
            "red": {
                "team_keys": [
                    9644,
                    811,
                    1768
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    1721,
                    9443,
                    6620
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.9115,
            "red_score": 119.01,
            "blue_score": 56.23,
            "red_auto_rp": 0.5851,
            "blue_auto_rp": 0.186,
            "red_coral_rp": 0.1748,
            "blue_coral_rp": 0.0592,
            "red_barge_rp": 0.4353,
            "blue_barge_rp": 0.4709,
            "red_rp_1": 0.5851,
            "blue_rp_1": 0.186,
            "red_rp_2": 0.1748,
            "blue_rp_2": 0.0592,
            "red_rp_3": 0.4353,
            "blue_rp_3": 0.4709
        },
        "result": {
            "winner": "red",
            "red_score": 106,
            "blue_score": 45,
            "red_no_foul": 106,
            "blue_no_foul": 45,
            "red_auto_points": 16,
            "blue_auto_points": 12,
            "red_teleop_points": 86,
            "blue_teleop_points": 29,
            "red_endgame_points": 4,
            "blue_endgame_points": 4,
            "red_auto_rp": true,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 1,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 1,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 7,
            "blue_auto_coral_points": 3,
            "red_teleop_coral": 21,
            "blue_teleop_coral": 3,
            "red_teleop_coral_points": 74,
            "blue_teleop_coral_points": 11,
            "red_coral_l1": 4,
            "blue_coral_l1": 0,
            "red_coral_l2": 7,
            "blue_coral_l2": 2,
            "red_coral_l3": 5,
            "blue_coral_l3": 0,
            "red_coral_l4": 6,
            "blue_coral_l4": 1,
            "red_total_coral_points": 81,
            "blue_total_coral_points": 14,
            "red_processor_algae": 0,
            "blue_processor_algae": 3,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 18,
            "red_net_algae": 3,
            "blue_net_algae": 0,
            "red_net_algae_points": 12,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 12,
            "blue_total_algae_points": 18,
            "red_total_game_pieces": 25,
            "blue_total_game_pieces": 6,
            "red_barge_points": 4,
            "blue_barge_points": 4,
            "red_rp_1": true,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm64",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 64,
        "match_name": "Qual 64",
        "time": 1740929040,
        "predicted_time": 1740929477,
        "status": "Completed",
        "video": "LAHHmXIpi3I",
        "alliances": {
            "red": {
                "team_keys": [
                    5902,
                    1058,
                    1277
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    3467,
                    6690,
                    2877
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.1178,
            "red_score": 83.94,
            "blue_score": 138.15,
            "red_auto_rp": 0.5904,
            "blue_auto_rp": 0.9095,
            "red_coral_rp": 0.0579,
            "blue_coral_rp": 0.2318,
            "red_barge_rp": 0.5216,
            "blue_barge_rp": 0.5683,
            "red_rp_1": 0.5904,
            "blue_rp_1": 0.9095,
            "red_rp_2": 0.0579,
            "blue_rp_2": 0.2318,
            "red_rp_3": 0.5216,
            "blue_rp_3": 0.5683
        },
        "result": {
            "winner": "blue",
            "red_score": 100,
            "blue_score": 148,
            "red_no_foul": 94,
            "blue_no_foul": 148,
            "red_auto_points": 16,
            "blue_auto_points": 37,
            "red_teleop_points": 54,
            "blue_teleop_points": 105,
            "red_endgame_points": 24,
            "blue_endgame_points": 6,
            "red_auto_rp": true,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": true,
            "red_barge_rp": true,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 1,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 1,
            "blue_auto_coral": 4,
            "red_auto_coral_points": 7,
            "blue_auto_coral_points": 28,
            "red_teleop_coral": 8,
            "blue_teleop_coral": 19,
            "red_teleop_coral_points": 34,
            "blue_teleop_coral_points": 77,
            "red_coral_l1": 2,
            "blue_coral_l1": 0,
            "red_coral_l2": 0,
            "blue_coral_l2": 6,
            "red_coral_l3": 0,
            "blue_coral_l3": 6,
            "red_coral_l4": 7,
            "blue_coral_l4": 11,
            "red_total_coral_points": 41,
            "blue_total_coral_points": 105,
            "red_processor_algae": 2,
            "blue_processor_algae": 2,
            "red_processor_algae_points": 12,
            "blue_processor_algae_points": 12,
            "red_net_algae": 2,
            "blue_net_algae": 4,
            "red_net_algae_points": 8,
            "blue_net_algae_points": 16,
            "red_total_algae_points": 20,
            "blue_total_algae_points": 28,
            "red_total_game_pieces": 13,
            "blue_total_game_pieces": 29,
            "red_barge_points": 24,
            "blue_barge_points": 6,
            "red_rp_1": true,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": true,
            "red_rp_3": true,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm65",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 65,
        "match_name": "Qual 65",
        "time": 1740929520,
        "predicted_time": 1740930092,
        "status": "Completed",
        "video": "6YseFiu_gB0",
        "alliances": {
            "red": {
                "team_keys": [
                    6201,
                    5962,
                    4925
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    138,
                    2342,
                    1761
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.3783,
            "red_score": 55.98,
            "blue_score": 69.35,
            "red_auto_rp": 0.6733,
            "blue_auto_rp": 0.5016,
            "red_coral_rp": 0.0475,
            "blue_coral_rp": 0.0528,
            "red_barge_rp": 0.4119,
            "blue_barge_rp": 0.3998,
            "red_rp_1": 0.6733,
            "blue_rp_1": 0.5016,
            "red_rp_2": 0.0475,
            "blue_rp_2": 0.0528,
            "red_rp_3": 0.4119,
            "blue_rp_3": 0.3998
        },
        "result": {
            "winner": "red",
            "red_score": 94,
            "blue_score": 84,
            "red_no_foul": 88,
            "blue_no_foul": 82,
            "red_auto_points": 23,
            "blue_auto_points": 16,
            "red_teleop_points": 51,
            "blue_teleop_points": 50,
            "red_endgame_points": 14,
            "blue_endgame_points": 16,
            "red_auto_rp": true,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 2,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 14,
            "blue_auto_coral_points": 7,
            "red_teleop_coral": 13,
            "blue_teleop_coral": 11,
            "red_teleop_coral_points": 51,
            "blue_teleop_coral_points": 50,
            "red_coral_l1": 2,
            "blue_coral_l1": 1,
            "red_coral_l2": 2,
            "blue_coral_l2": 1,
            "red_coral_l3": 4,
            "blue_coral_l3": 0,
            "red_coral_l4": 7,
            "blue_coral_l4": 10,
            "red_total_coral_points": 65,
            "blue_total_coral_points": 57,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 15,
            "blue_total_game_pieces": 12,
            "red_barge_points": 14,
            "blue_barge_points": 16,
            "red_rp_1": true,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm66",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 66,
        "match_name": "Qual 66",
        "time": 1740930000,
        "predicted_time": 1740930430,
        "status": "Completed",
        "video": "KBn9R9lRY0c",
        "alliances": {
            "red": {
                "team_keys": [
                    8013,
                    5491,
                    97
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    8708,
                    3623,
                    4909
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.2423,
            "red_score": 72.61,
            "blue_score": 103.31,
            "red_auto_rp": 0.1049,
            "blue_auto_rp": 0.3679,
            "red_coral_rp": 0.0248,
            "blue_coral_rp": 0.0766,
            "red_barge_rp": 0.4624,
            "blue_barge_rp": 0.7449,
            "red_rp_1": 0.1049,
            "blue_rp_1": 0.3679,
            "red_rp_2": 0.0248,
            "blue_rp_2": 0.0766,
            "red_rp_3": 0.4624,
            "blue_rp_3": 0.7449
        },
        "result": {
            "winner": "blue",
            "red_score": 57,
            "blue_score": 101,
            "red_no_foul": 57,
            "blue_no_foul": 101,
            "red_auto_points": 16,
            "blue_auto_points": 23,
            "red_teleop_points": 25,
            "blue_teleop_points": 74,
            "red_endgame_points": 16,
            "blue_endgame_points": 4,
            "red_auto_rp": true,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 1,
            "blue_auto_coral": 2,
            "red_auto_coral_points": 7,
            "blue_auto_coral_points": 14,
            "red_teleop_coral": 5,
            "blue_teleop_coral": 17,
            "red_teleop_coral_points": 25,
            "blue_teleop_coral_points": 74,
            "red_coral_l1": 0,
            "blue_coral_l1": 1,
            "red_coral_l2": 0,
            "blue_coral_l2": 2,
            "red_coral_l3": 0,
            "blue_coral_l3": 4,
            "red_coral_l4": 6,
            "blue_coral_l4": 12,
            "red_total_coral_points": 32,
            "blue_total_coral_points": 88,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 6,
            "blue_total_game_pieces": 19,
            "red_barge_points": 16,
            "blue_barge_points": 4,
            "red_rp_1": true,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm67",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 67,
        "match_name": "Qual 67",
        "time": 1740930480,
        "predicted_time": 1740931041,
        "status": "Completed",
        "video": "zI_V9hgF0Jc",
        "alliances": {
            "red": {
                "team_keys": [
                    9644,
                    501,
                    319
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    663,
                    7314,
                    6328
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.3662,
            "red_score": 100.77,
            "blue_score": 115.54,
            "red_auto_rp": 0.3558,
            "blue_auto_rp": 0.8996,
            "red_coral_rp": 0.1115,
            "blue_coral_rp": 0.1123,
            "red_barge_rp": 0.1749,
            "blue_barge_rp": 0.6492,
            "red_rp_1": 0.3558,
            "blue_rp_1": 0.8996,
            "red_rp_2": 0.1115,
            "blue_rp_2": 0.1123,
            "red_rp_3": 0.1749,
            "blue_rp_3": 0.6492
        },
        "result": {
            "winner": "red",
            "red_score": 133,
            "blue_score": 101,
            "red_no_foul": 105,
            "blue_no_foul": 95,
            "red_auto_points": 9,
            "blue_auto_points": 23,
            "red_teleop_points": 90,
            "blue_teleop_points": 56,
            "red_endgame_points": 6,
            "blue_endgame_points": 16,
            "red_auto_rp": false,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 0,
            "blue_auto_coral": 2,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 14,
            "red_teleop_coral": 21,
            "blue_teleop_coral": 17,
            "red_teleop_coral_points": 90,
            "blue_teleop_coral_points": 56,
            "red_coral_l1": 0,
            "blue_coral_l1": 6,
            "red_coral_l2": 5,
            "blue_coral_l2": 3,
            "red_coral_l3": 5,
            "blue_coral_l3": 5,
            "red_coral_l4": 11,
            "blue_coral_l4": 5,
            "red_total_coral_points": 90,
            "blue_total_coral_points": 70,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 21,
            "blue_total_game_pieces": 19,
            "red_barge_points": 6,
            "blue_barge_points": 16,
            "red_rp_1": false,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm68",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 68,
        "match_name": "Qual 68",
        "time": 1740930960,
        "predicted_time": 1740931520,
        "status": "Completed",
        "video": "RuZ-Ya7coLo",
        "alliances": {
            "red": {
                "team_keys": [
                    1768,
                    1277,
                    9443
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    6620,
                    8410,
                    2877
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.6075,
            "red_score": 96.23,
            "blue_score": 84.47,
            "red_auto_rp": 0.6204,
            "blue_auto_rp": 0.7923,
            "red_coral_rp": 0.0566,
            "blue_coral_rp": 0.0499,
            "red_barge_rp": 0.651,
            "blue_barge_rp": 0.4782,
            "red_rp_1": 0.6204,
            "blue_rp_1": 0.7923,
            "red_rp_2": 0.0566,
            "blue_rp_2": 0.0499,
            "red_rp_3": 0.651,
            "blue_rp_3": 0.4782
        },
        "result": {
            "winner": "blue",
            "red_score": 81,
            "blue_score": 104,
            "red_no_foul": 79,
            "blue_no_foul": 104,
            "red_auto_points": 9,
            "blue_auto_points": 33,
            "red_teleop_points": 64,
            "blue_teleop_points": 65,
            "red_endgame_points": 6,
            "blue_endgame_points": 6,
            "red_auto_rp": false,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 0,
            "blue_auto_coral": 4,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 24,
            "red_teleop_coral": 10,
            "blue_teleop_coral": 13,
            "red_teleop_coral_points": 38,
            "blue_teleop_coral_points": 53,
            "red_coral_l1": 0,
            "blue_coral_l1": 3,
            "red_coral_l2": 5,
            "blue_coral_l2": 1,
            "red_coral_l3": 2,
            "blue_coral_l3": 1,
            "red_coral_l4": 3,
            "blue_coral_l4": 11,
            "red_total_coral_points": 38,
            "blue_total_coral_points": 77,
            "red_processor_algae": 3,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 18,
            "blue_processor_algae_points": 0,
            "red_net_algae": 2,
            "blue_net_algae": 3,
            "red_net_algae_points": 8,
            "blue_net_algae_points": 12,
            "red_total_algae_points": 26,
            "blue_total_algae_points": 12,
            "red_total_game_pieces": 15,
            "blue_total_game_pieces": 19,
            "red_barge_points": 6,
            "blue_barge_points": 6,
            "red_rp_1": false,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm69",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 69,
        "match_name": "Qual 69",
        "time": 1740931440,
        "predicted_time": 1740931936,
        "status": "Completed",
        "video": "YEMYxlzWqZY",
        "alliances": {
            "red": {
                "team_keys": [
                    3467,
                    9729,
                    10156
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    6201,
                    6690,
                    1721
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.7663,
            "red_score": 98.37,
            "blue_score": 66.4,
            "red_auto_rp": 0.4835,
            "blue_auto_rp": 0.3823,
            "red_coral_rp": 0.1862,
            "blue_coral_rp": 0.0654,
            "red_barge_rp": 0.3753,
            "blue_barge_rp": 0.205,
            "red_rp_1": 0.4835,
            "blue_rp_1": 0.3823,
            "red_rp_2": 0.1862,
            "blue_rp_2": 0.0654,
            "red_rp_3": 0.3753,
            "blue_rp_3": 0.205
        },
        "result": {
            "winner": "red",
            "red_score": 119,
            "blue_score": 77,
            "red_no_foul": 101,
            "blue_no_foul": 77,
            "red_auto_points": 15,
            "blue_auto_points": 16,
            "red_teleop_points": 82,
            "blue_teleop_points": 45,
            "red_endgame_points": 4,
            "blue_endgame_points": 16,
            "red_auto_rp": true,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 1,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 2,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 6,
            "blue_auto_coral_points": 7,
            "red_teleop_coral": 16,
            "blue_teleop_coral": 7,
            "red_teleop_coral_points": 68,
            "blue_teleop_coral_points": 29,
            "red_coral_l1": 4,
            "blue_coral_l1": 2,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 0,
            "red_coral_l4": 12,
            "blue_coral_l4": 5,
            "red_total_coral_points": 74,
            "blue_total_coral_points": 36,
            "red_processor_algae": 1,
            "blue_processor_algae": 2,
            "red_processor_algae_points": 6,
            "blue_processor_algae_points": 12,
            "red_net_algae": 2,
            "blue_net_algae": 1,
            "red_net_algae_points": 8,
            "blue_net_algae_points": 4,
            "red_total_algae_points": 14,
            "blue_total_algae_points": 16,
            "red_total_game_pieces": 19,
            "blue_total_game_pieces": 10,
            "red_barge_points": 4,
            "blue_barge_points": 16,
            "red_rp_1": true,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm7",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 7,
        "match_name": "Qual 7",
        "time": 1740848040,
        "predicted_time": 1740849849,
        "status": "Completed",
        "video": "fMk0LxCOWzo",
        "alliances": {
            "red": {
                "team_keys": [
                    10156,
                    2877,
                    138
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    4987,
                    3467,
                    3566
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.4249,
            "red_score": 82.4,
            "blue_score": 90.55,
            "red_auto_rp": 0.4333,
            "blue_auto_rp": 0.4435,
            "red_coral_rp": 0.0478,
            "blue_coral_rp": 0.0482,
            "red_barge_rp": 0.3574,
            "blue_barge_rp": 0.4733,
            "red_rp_1": 0.4333,
            "blue_rp_1": 0.4435,
            "red_rp_2": 0.0478,
            "blue_rp_2": 0.0482,
            "red_rp_3": 0.3574,
            "blue_rp_3": 0.4733
        },
        "result": {
            "winner": "red",
            "red_score": 123,
            "blue_score": 75,
            "red_no_foul": 123,
            "blue_no_foul": 75,
            "red_auto_points": 30,
            "blue_auto_points": 19,
            "red_teleop_points": 79,
            "blue_teleop_points": 52,
            "red_endgame_points": 14,
            "blue_endgame_points": 4,
            "red_auto_rp": true,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 1,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 6,
            "red_auto_coral": 3,
            "blue_auto_coral": 3,
            "red_auto_coral_points": 21,
            "blue_auto_coral_points": 13,
            "red_teleop_coral": 17,
            "blue_teleop_coral": 9,
            "red_teleop_coral_points": 71,
            "blue_teleop_coral_points": 40,
            "red_coral_l1": 0,
            "blue_coral_l1": 0,
            "red_coral_l2": 5,
            "blue_coral_l2": 0,
            "red_coral_l3": 4,
            "blue_coral_l3": 5,
            "red_coral_l4": 11,
            "blue_coral_l4": 5,
            "red_total_coral_points": 92,
            "blue_total_coral_points": 53,
            "red_processor_algae": 0,
            "blue_processor_algae": 2,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 12,
            "red_net_algae": 2,
            "blue_net_algae": 0,
            "red_net_algae_points": 8,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 8,
            "blue_total_algae_points": 12,
            "red_total_game_pieces": 22,
            "blue_total_game_pieces": 12,
            "red_barge_points": 14,
            "blue_barge_points": 4,
            "red_rp_1": true,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm70",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 70,
        "match_name": "Qual 70",
        "time": 1740931920,
        "predicted_time": 1740932364,
        "status": "Completed",
        "video": "bA4GMDga6cs",
        "alliances": {
            "red": {
                "team_keys": [
                    3566,
                    8013,
                    138
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    8708,
                    2342,
                    4987
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.7779,
            "red_score": 96.15,
            "blue_score": 62.41,
            "red_auto_rp": 0.6872,
            "blue_auto_rp": 0.3952,
            "red_coral_rp": 0.0259,
            "blue_coral_rp": 0.0747,
            "red_barge_rp": 0.7917,
            "blue_barge_rp": 0.1833,
            "red_rp_1": 0.6872,
            "blue_rp_1": 0.3952,
            "red_rp_2": 0.0259,
            "blue_rp_2": 0.0747,
            "red_rp_3": 0.7917,
            "blue_rp_3": 0.1833
        },
        "result": {
            "winner": "red",
            "red_score": 107,
            "blue_score": 97,
            "red_no_foul": 81,
            "blue_no_foul": 95,
            "red_auto_points": 16,
            "blue_auto_points": 16,
            "red_teleop_points": 51,
            "blue_teleop_points": 63,
            "red_endgame_points": 14,
            "blue_endgame_points": 16,
            "red_auto_rp": true,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": true,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 1,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 7,
            "blue_auto_coral_points": 7,
            "red_teleop_coral": 9,
            "blue_teleop_coral": 13,
            "red_teleop_coral_points": 39,
            "blue_teleop_coral_points": 63,
            "red_coral_l1": 1,
            "blue_coral_l1": 0,
            "red_coral_l2": 1,
            "blue_coral_l2": 0,
            "red_coral_l3": 1,
            "blue_coral_l3": 2,
            "red_coral_l4": 7,
            "blue_coral_l4": 12,
            "red_total_coral_points": 46,
            "blue_total_coral_points": 70,
            "red_processor_algae": 2,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 12,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 12,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 12,
            "blue_total_game_pieces": 14,
            "red_barge_points": 14,
            "blue_barge_points": 16,
            "red_rp_1": true,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": true,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm71",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 71,
        "match_name": "Qual 71",
        "time": 1740932400,
        "predicted_time": 1740932719,
        "status": "Completed",
        "video": "8axTDMbx9EE",
        "alliances": {
            "red": {
                "team_keys": [
                    5491,
                    5902,
                    811
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    3623,
                    1247,
                    97
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.4081,
            "red_score": 40.79,
            "blue_score": 50.8,
            "red_auto_rp": 0.1561,
            "blue_auto_rp": 0.4063,
            "red_coral_rp": 0.0467,
            "blue_coral_rp": 0.0247,
            "red_barge_rp": 0.1559,
            "blue_barge_rp": 0.4259,
            "red_rp_1": 0.1561,
            "blue_rp_1": 0.4063,
            "red_rp_2": 0.0467,
            "blue_rp_2": 0.0247,
            "red_rp_3": 0.1559,
            "blue_rp_3": 0.4259
        },
        "result": {
            "winner": "tie",
            "red_score": 31,
            "blue_score": 31,
            "red_no_foul": 31,
            "blue_no_foul": 29,
            "red_auto_points": 9,
            "blue_auto_points": 9,
            "red_teleop_points": 20,
            "blue_teleop_points": 16,
            "red_endgame_points": 2,
            "blue_endgame_points": 4,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 0,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 4,
            "blue_teleop_coral": 4,
            "red_teleop_coral_points": 20,
            "blue_teleop_coral_points": 16,
            "red_coral_l1": 0,
            "blue_coral_l1": 0,
            "red_coral_l2": 0,
            "blue_coral_l2": 2,
            "red_coral_l3": 0,
            "blue_coral_l3": 0,
            "red_coral_l4": 4,
            "blue_coral_l4": 2,
            "red_total_coral_points": 20,
            "blue_total_coral_points": 16,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 4,
            "blue_total_game_pieces": 4,
            "red_barge_points": 2,
            "blue_barge_points": 4,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm72",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 72,
        "match_name": "Qual 72",
        "time": 1740932880,
        "predicted_time": 1740933138,
        "status": "Completed",
        "video": "mNn-t0Fg8SI",
        "alliances": {
            "red": {
                "team_keys": [
                    1761,
                    4909,
                    5962
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    4925,
                    1512,
                    1058
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.6039,
            "red_score": 80.9,
            "blue_score": 69.55,
            "red_auto_rp": 0.5377,
            "blue_auto_rp": 0.6623,
            "red_coral_rp": 0.0487,
            "blue_coral_rp": 0.0526,
            "red_barge_rp": 0.3318,
            "blue_barge_rp": 0.7723,
            "red_rp_1": 0.5377,
            "blue_rp_1": 0.6623,
            "red_rp_2": 0.0487,
            "blue_rp_2": 0.0526,
            "red_rp_3": 0.3318,
            "blue_rp_3": 0.7723
        },
        "result": {
            "winner": "red",
            "red_score": 70,
            "blue_score": 54,
            "red_no_foul": 64,
            "blue_no_foul": 54,
            "red_auto_points": 23,
            "blue_auto_points": 25,
            "red_teleop_points": 35,
            "blue_teleop_points": 15,
            "red_endgame_points": 6,
            "blue_endgame_points": 14,
            "red_auto_rp": true,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 2,
            "blue_auto_coral": 4,
            "red_auto_coral_points": 14,
            "blue_auto_coral_points": 16,
            "red_teleop_coral": 7,
            "blue_teleop_coral": 4,
            "red_teleop_coral_points": 35,
            "blue_teleop_coral_points": 15,
            "red_coral_l1": 0,
            "blue_coral_l1": 1,
            "red_coral_l2": 0,
            "blue_coral_l2": 1,
            "red_coral_l3": 0,
            "blue_coral_l3": 0,
            "red_coral_l4": 9,
            "blue_coral_l4": 3,
            "red_total_coral_points": 49,
            "blue_total_coral_points": 31,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 9,
            "blue_total_game_pieces": 5,
            "red_barge_points": 6,
            "blue_barge_points": 14,
            "red_rp_1": true,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_qm8",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 8,
        "match_name": "Qual 8",
        "time": 1740848520,
        "predicted_time": 1740850508,
        "status": "Completed",
        "video": "Dt-BHr7QEh0",
        "alliances": {
            "red": {
                "team_keys": [
                    8013,
                    1512,
                    811
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    5491,
                    9644,
                    1277
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": [
                    5491
                ]
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.7423,
            "red_score": 90.25,
            "blue_score": 61.76,
            "red_auto_rp": 0.3346,
            "blue_auto_rp": 0.2401,
            "red_coral_rp": 0.0484,
            "blue_coral_rp": 0.0455,
            "red_barge_rp": 0.4717,
            "blue_barge_rp": 0.3812,
            "red_rp_1": 0.3346,
            "blue_rp_1": 0.2401,
            "red_rp_2": 0.0484,
            "blue_rp_2": 0.0455,
            "red_rp_3": 0.4717,
            "blue_rp_3": 0.3812
        },
        "result": {
            "winner": "blue",
            "red_score": 55,
            "blue_score": 66,
            "red_no_foul": 55,
            "blue_no_foul": 66,
            "red_auto_points": 13,
            "blue_auto_points": 3,
            "red_teleop_points": 38,
            "blue_teleop_points": 59,
            "red_endgame_points": 4,
            "blue_endgame_points": 4,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 6,
            "blue_auto_leave_points": 3,
            "red_auto_coral": 1,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 7,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 6,
            "blue_teleop_coral": 12,
            "red_teleop_coral_points": 30,
            "blue_teleop_coral_points": 59,
            "red_coral_l1": 0,
            "blue_coral_l1": 0,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 1,
            "red_coral_l4": 7,
            "blue_coral_l4": 11,
            "red_total_coral_points": 37,
            "blue_total_coral_points": 59,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 2,
            "blue_net_algae": 0,
            "red_net_algae_points": 8,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 8,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 9,
            "blue_total_game_pieces": 12,
            "red_barge_points": 4,
            "blue_barge_points": 4,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_qm9",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": false,
        "comp_level": "qm",
        "set_number": 1,
        "match_number": 9,
        "match_name": "Qual 9",
        "time": 1740849000,
        "predicted_time": 1740850984,
        "status": "Completed",
        "video": null,
        "alliances": {
            "red": {
                "team_keys": [
                    5902,
                    319,
                    9443
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    2342,
                    6201,
                    1247
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.6509,
            "red_score": 83.68,
            "blue_score": 66.9,
            "red_auto_rp": 0.4208,
            "blue_auto_rp": 0.3001,
            "red_coral_rp": 0.0475,
            "blue_coral_rp": 0.0453,
            "red_barge_rp": 0.4549,
            "blue_barge_rp": 0.2637,
            "red_rp_1": 0.4208,
            "blue_rp_1": 0.3001,
            "red_rp_2": 0.0475,
            "blue_rp_2": 0.0453,
            "red_rp_3": 0.4549,
            "blue_rp_3": 0.2637
        },
        "result": {
            "winner": "blue",
            "red_score": 61,
            "blue_score": 118,
            "red_no_foul": 61,
            "blue_no_foul": 118,
            "red_auto_points": 9,
            "blue_auto_points": 23,
            "red_teleop_points": 46,
            "blue_teleop_points": 79,
            "red_endgame_points": 6,
            "blue_endgame_points": 16,
            "red_auto_rp": false,
            "blue_auto_rp": true,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": true,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 0,
            "blue_auto_coral": 2,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 14,
            "red_teleop_coral": 5,
            "blue_teleop_coral": 15,
            "red_teleop_coral_points": 22,
            "blue_teleop_coral_points": 67,
            "red_coral_l1": 1,
            "blue_coral_l1": 0,
            "red_coral_l2": 0,
            "blue_coral_l2": 3,
            "red_coral_l3": 0,
            "blue_coral_l3": 2,
            "red_coral_l4": 4,
            "blue_coral_l4": 12,
            "red_total_coral_points": 22,
            "blue_total_coral_points": 81,
            "red_processor_algae": 4,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 24,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 3,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 12,
            "red_total_algae_points": 24,
            "blue_total_algae_points": 12,
            "red_total_game_pieces": 9,
            "blue_total_game_pieces": 20,
            "red_barge_points": 6,
            "blue_barge_points": 16,
            "red_rp_1": false,
            "blue_rp_1": true,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": true
        }
    },
    {
        "key": "2025nhsal_sf10m1",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": true,
        "comp_level": "sf",
        "set_number": 10,
        "match_number": 1,
        "match_name": "Semis 10 Match 1",
        "time": 1740943260,
        "predicted_time": 1740944239,
        "status": "Completed",
        "video": "pPUYmCqk9qs",
        "alliances": {
            "red": {
                "team_keys": [
                    1768,
                    1721,
                    9644
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    501,
                    8708,
                    8410
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.819,
            "red_score": 109.85,
            "blue_score": 69.21,
            "red_auto_rp": 0.6332,
            "blue_auto_rp": 0.3291,
            "red_coral_rp": 0.1473,
            "blue_coral_rp": 0.032,
            "red_barge_rp": 0.5013,
            "blue_barge_rp": 0.2724,
            "red_rp_1": 0.6332,
            "blue_rp_1": 0.3291,
            "red_rp_2": 0.1473,
            "blue_rp_2": 0.032,
            "red_rp_3": 0.5013,
            "blue_rp_3": 0.2724
        },
        "result": {
            "winner": "red",
            "red_score": 171,
            "blue_score": 82,
            "red_no_foul": 165,
            "blue_no_foul": 82,
            "red_auto_points": 16,
            "blue_auto_points": 9,
            "red_teleop_points": 145,
            "blue_teleop_points": 69,
            "red_endgame_points": 4,
            "blue_endgame_points": 4,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 1,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 7,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 22,
            "blue_teleop_coral": 9,
            "red_teleop_coral_points": 97,
            "blue_teleop_coral_points": 41,
            "red_coral_l1": 0,
            "blue_coral_l1": 1,
            "red_coral_l2": 1,
            "blue_coral_l2": 0,
            "red_coral_l3": 11,
            "blue_coral_l3": 1,
            "red_coral_l4": 11,
            "blue_coral_l4": 7,
            "red_total_coral_points": 104,
            "blue_total_coral_points": 41,
            "red_processor_algae": 8,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 48,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 7,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 28,
            "red_total_algae_points": 48,
            "blue_total_algae_points": 28,
            "red_total_game_pieces": 31,
            "blue_total_game_pieces": 16,
            "red_barge_points": 4,
            "blue_barge_points": 4,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_sf11m1",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": true,
        "comp_level": "sf",
        "set_number": 11,
        "match_number": 1,
        "match_name": "Semis 11 Match 1",
        "time": 1740943980,
        "predicted_time": 1740944952,
        "status": "Completed",
        "video": "z10MuBhSofM",
        "alliances": {
            "red": {
                "team_keys": [
                    138,
                    6690,
                    2342
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    2877,
                    1512,
                    4909
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.1903,
            "red_score": 90.63,
            "blue_score": 129.62,
            "red_auto_rp": 0.7658,
            "blue_auto_rp": 0.8542,
            "red_coral_rp": 0.0665,
            "blue_coral_rp": 0.0957,
            "red_barge_rp": 0.5663,
            "blue_barge_rp": 0.6546,
            "red_rp_1": 0.7658,
            "blue_rp_1": 0.8542,
            "red_rp_2": 0.0665,
            "blue_rp_2": 0.0957,
            "red_rp_3": 0.5663,
            "blue_rp_3": 0.6546
        },
        "result": {
            "winner": "blue",
            "red_score": 100,
            "blue_score": 124,
            "red_no_foul": 100,
            "blue_no_foul": 106,
            "red_auto_points": 23,
            "blue_auto_points": 40,
            "red_teleop_points": 57,
            "blue_teleop_points": 52,
            "red_endgame_points": 20,
            "blue_endgame_points": 14,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 2,
            "blue_auto_coral": 5,
            "red_auto_coral_points": 14,
            "blue_auto_coral_points": 31,
            "red_teleop_coral": 13,
            "blue_teleop_coral": 13,
            "red_teleop_coral_points": 57,
            "blue_teleop_coral_points": 52,
            "red_coral_l1": 2,
            "blue_coral_l1": 3,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 2,
            "blue_coral_l3": 4,
            "red_coral_l4": 11,
            "blue_coral_l4": 10,
            "red_total_coral_points": 71,
            "blue_total_coral_points": 83,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 15,
            "blue_total_game_pieces": 17,
            "red_barge_points": 20,
            "blue_barge_points": 14,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_sf12m1",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": true,
        "comp_level": "sf",
        "set_number": 12,
        "match_number": 1,
        "match_name": "Semis 12 Match 1",
        "time": 1740944520,
        "predicted_time": 1740945633,
        "status": "Completed",
        "video": "SCPkaPWbxiM",
        "alliances": {
            "red": {
                "team_keys": [
                    1768,
                    1721,
                    9644
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    9443,
                    6328,
                    3467
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.1699,
            "red_score": 122.41,
            "blue_score": 165.12,
            "red_auto_rp": 0.6332,
            "blue_auto_rp": 0.9539,
            "red_coral_rp": 0.1473,
            "blue_coral_rp": 0.5158,
            "red_barge_rp": 0.5013,
            "blue_barge_rp": 0.877,
            "red_rp_1": 0.6332,
            "blue_rp_1": 0.9539,
            "red_rp_2": 0.1473,
            "blue_rp_2": 0.5158,
            "red_rp_3": 0.5013,
            "blue_rp_3": 0.877
        },
        "result": {
            "winner": "blue",
            "red_score": 107,
            "blue_score": 163,
            "red_no_foul": 101,
            "blue_no_foul": 163,
            "red_auto_points": 16,
            "blue_auto_points": 44,
            "red_teleop_points": 79,
            "blue_teleop_points": 95,
            "red_endgame_points": 6,
            "blue_endgame_points": 24,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 1,
            "blue_auto_coral": 5,
            "red_auto_coral_points": 7,
            "blue_auto_coral_points": 35,
            "red_teleop_coral": 18,
            "blue_teleop_coral": 23,
            "red_teleop_coral_points": 79,
            "blue_teleop_coral_points": 95,
            "red_coral_l1": 1,
            "blue_coral_l1": 0,
            "red_coral_l2": 1,
            "blue_coral_l2": 4,
            "red_coral_l3": 6,
            "blue_coral_l3": 12,
            "red_coral_l4": 11,
            "blue_coral_l4": 12,
            "red_total_coral_points": 86,
            "blue_total_coral_points": 130,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 19,
            "blue_total_game_pieces": 28,
            "red_barge_points": 6,
            "blue_barge_points": 24,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_sf13m1",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": true,
        "comp_level": "sf",
        "set_number": 13,
        "match_number": 1,
        "match_name": "Semis 13 Match 1",
        "time": 1740945780,
        "predicted_time": 1740946933,
        "status": "Completed",
        "video": "-lVYWM3j6hA",
        "alliances": {
            "red": {
                "team_keys": [
                    138,
                    6690,
                    2342
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    9443,
                    6328,
                    3467
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.0892,
            "red_score": 97.89,
            "blue_score": 160.45,
            "red_auto_rp": 0.7658,
            "blue_auto_rp": 0.9539,
            "red_coral_rp": 0.0665,
            "blue_coral_rp": 0.5158,
            "red_barge_rp": 0.5663,
            "blue_barge_rp": 0.877,
            "red_rp_1": 0.7658,
            "blue_rp_1": 0.9539,
            "red_rp_2": 0.0665,
            "blue_rp_2": 0.5158,
            "red_rp_3": 0.5663,
            "blue_rp_3": 0.877
        },
        "result": {
            "winner": "blue",
            "red_score": 99,
            "blue_score": 158,
            "red_no_foul": 99,
            "blue_no_foul": 158,
            "red_auto_points": 19,
            "blue_auto_points": 48,
            "red_teleop_points": 74,
            "blue_teleop_points": 84,
            "red_endgame_points": 6,
            "blue_endgame_points": 26,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 2,
            "blue_auto_coral": 6,
            "red_auto_coral_points": 10,
            "blue_auto_coral_points": 39,
            "red_teleop_coral": 16,
            "blue_teleop_coral": 20,
            "red_teleop_coral_points": 74,
            "blue_teleop_coral_points": 84,
            "red_coral_l1": 0,
            "blue_coral_l1": 0,
            "red_coral_l2": 1,
            "blue_coral_l2": 4,
            "red_coral_l3": 4,
            "blue_coral_l3": 10,
            "red_coral_l4": 12,
            "blue_coral_l4": 12,
            "red_total_coral_points": 84,
            "blue_total_coral_points": 123,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 17,
            "blue_total_game_pieces": 26,
            "red_barge_points": 6,
            "blue_barge_points": 26,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_sf1m1",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": true,
        "comp_level": "sf",
        "set_number": 1,
        "match_number": 1,
        "match_name": "Semis 1 Match 1",
        "time": 1740938400,
        "predicted_time": 1740938583,
        "status": "Completed",
        "video": "LBkjKiM6tMQ",
        "alliances": {
            "red": {
                "team_keys": [
                    9443,
                    6328,
                    3467
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    501,
                    8708,
                    8410
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.9584,
            "red_score": 156.83,
            "blue_score": 72.4,
            "red_auto_rp": 0.9539,
            "blue_auto_rp": 0.3291,
            "red_coral_rp": 0.5158,
            "blue_coral_rp": 0.032,
            "red_barge_rp": 0.877,
            "blue_barge_rp": 0.2724,
            "red_rp_1": 0.9539,
            "blue_rp_1": 0.3291,
            "red_rp_2": 0.5158,
            "blue_rp_2": 0.032,
            "red_rp_3": 0.877,
            "blue_rp_3": 0.2724
        },
        "result": {
            "winner": "red",
            "red_score": 169,
            "blue_score": 76,
            "red_no_foul": 169,
            "blue_no_foul": 68,
            "red_auto_points": 38,
            "blue_auto_points": 9,
            "red_teleop_points": 117,
            "blue_teleop_points": 57,
            "red_endgame_points": 14,
            "blue_endgame_points": 2,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 6,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 5,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 32,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 30,
            "blue_teleop_coral": 12,
            "red_teleop_coral_points": 117,
            "blue_teleop_coral_points": 57,
            "red_coral_l1": 1,
            "blue_coral_l1": 0,
            "red_coral_l2": 10,
            "blue_coral_l2": 0,
            "red_coral_l3": 12,
            "blue_coral_l3": 3,
            "red_coral_l4": 12,
            "blue_coral_l4": 9,
            "red_total_coral_points": 149,
            "blue_total_coral_points": 57,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 35,
            "blue_total_game_pieces": 12,
            "red_barge_points": 14,
            "blue_barge_points": 2,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_sf2m1",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": true,
        "comp_level": "sf",
        "set_number": 2,
        "match_number": 1,
        "match_name": "Semis 2 Match 1",
        "time": 1740938940,
        "predicted_time": 1740939199,
        "status": "Completed",
        "video": "PgsuVHC_OMY",
        "alliances": {
            "red": {
                "team_keys": [
                    138,
                    6690,
                    2342
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    8013,
                    1277,
                    1058
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.2851,
            "red_score": 86.99,
            "blue_score": 111.74,
            "red_auto_rp": 0.7658,
            "blue_auto_rp": 0.8609,
            "red_coral_rp": 0.0665,
            "blue_coral_rp": 0.0386,
            "red_barge_rp": 0.5663,
            "blue_barge_rp": 0.8788,
            "red_rp_1": 0.7658,
            "blue_rp_1": 0.8609,
            "red_rp_2": 0.0665,
            "blue_rp_2": 0.0386,
            "red_rp_3": 0.5663,
            "blue_rp_3": 0.8788
        },
        "result": {
            "winner": "red",
            "red_score": 115,
            "blue_score": 98,
            "red_no_foul": 115,
            "blue_no_foul": 98,
            "red_auto_points": 16,
            "blue_auto_points": 16,
            "red_teleop_points": 79,
            "blue_teleop_points": 78,
            "red_endgame_points": 20,
            "blue_endgame_points": 4,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 1,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 7,
            "blue_auto_coral_points": 7,
            "red_teleop_coral": 17,
            "blue_teleop_coral": 13,
            "red_teleop_coral_points": 79,
            "blue_teleop_coral_points": 58,
            "red_coral_l1": 0,
            "blue_coral_l1": 2,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 6,
            "blue_coral_l3": 1,
            "red_coral_l4": 12,
            "blue_coral_l4": 11,
            "red_total_coral_points": 86,
            "blue_total_coral_points": 65,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 5,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 20,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 20,
            "red_total_game_pieces": 18,
            "blue_total_game_pieces": 19,
            "red_barge_points": 20,
            "blue_barge_points": 4,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_sf3m1",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": true,
        "comp_level": "sf",
        "set_number": 3,
        "match_number": 1,
        "match_name": "Semis 3 Match 1",
        "time": 1740939480,
        "predicted_time": 1740939614,
        "status": "Completed",
        "video": "lursj_WY1f0",
        "alliances": {
            "red": {
                "team_keys": [
                    2877,
                    1512,
                    4909
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    319,
                    5962,
                    4925
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.9045,
            "red_score": 131.12,
            "blue_score": 70.59,
            "red_auto_rp": 0.8542,
            "blue_auto_rp": 0.6048,
            "red_coral_rp": 0.0957,
            "blue_coral_rp": 0.0482,
            "red_barge_rp": 0.6546,
            "blue_barge_rp": 0.4874,
            "red_rp_1": 0.8542,
            "blue_rp_1": 0.6048,
            "red_rp_2": 0.0957,
            "blue_rp_2": 0.0482,
            "red_rp_3": 0.6546,
            "blue_rp_3": 0.4874
        },
        "result": {
            "winner": "red",
            "red_score": 137,
            "blue_score": 51,
            "red_no_foul": 137,
            "blue_no_foul": 47,
            "red_auto_points": 37,
            "blue_auto_points": 12,
            "red_teleop_points": 84,
            "blue_teleop_points": 31,
            "red_endgame_points": 16,
            "blue_endgame_points": 4,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 4,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 28,
            "blue_auto_coral_points": 3,
            "red_teleop_coral": 18,
            "blue_teleop_coral": 7,
            "red_teleop_coral_points": 76,
            "blue_teleop_coral_points": 31,
            "red_coral_l1": 0,
            "blue_coral_l1": 0,
            "red_coral_l2": 4,
            "blue_coral_l2": 1,
            "red_coral_l3": 6,
            "blue_coral_l3": 2,
            "red_coral_l4": 12,
            "blue_coral_l4": 4,
            "red_total_coral_points": 104,
            "blue_total_coral_points": 34,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 2,
            "blue_net_algae": 0,
            "red_net_algae_points": 8,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 8,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 24,
            "blue_total_game_pieces": 7,
            "red_barge_points": 16,
            "blue_barge_points": 4,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_sf4m1",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": true,
        "comp_level": "sf",
        "set_number": 4,
        "match_number": 1,
        "match_name": "Semis 4 Match 1",
        "time": 1740940020,
        "predicted_time": 1740940626,
        "status": "Completed",
        "video": "flKX1Y6FyKU",
        "alliances": {
            "red": {
                "team_keys": [
                    1768,
                    1721,
                    9644
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    6201,
                    3623,
                    663
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.7542,
            "red_score": 114.35,
            "blue_score": 84.17,
            "red_auto_rp": 0.6332,
            "blue_auto_rp": 0.5272,
            "red_coral_rp": 0.1473,
            "blue_coral_rp": 0.0457,
            "red_barge_rp": 0.5013,
            "blue_barge_rp": 0.6035,
            "red_rp_1": 0.6332,
            "blue_rp_1": 0.5272,
            "red_rp_2": 0.1473,
            "blue_rp_2": 0.0457,
            "red_rp_3": 0.5013,
            "blue_rp_3": 0.6035
        },
        "result": {
            "winner": "red",
            "red_score": 127,
            "blue_score": 90,
            "red_no_foul": 97,
            "blue_no_foul": 80,
            "red_auto_points": 9,
            "blue_auto_points": 13,
            "red_teleop_points": 84,
            "blue_teleop_points": 53,
            "red_endgame_points": 4,
            "blue_endgame_points": 14,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 6,
            "red_auto_coral": 0,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 7,
            "red_teleop_coral": 13,
            "blue_teleop_coral": 12,
            "red_teleop_coral_points": 62,
            "blue_teleop_coral_points": 53,
            "red_coral_l1": 1,
            "blue_coral_l1": 2,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 1,
            "red_coral_l4": 12,
            "blue_coral_l4": 10,
            "red_total_coral_points": 62,
            "blue_total_coral_points": 60,
            "red_processor_algae": 3,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 18,
            "blue_processor_algae_points": 0,
            "red_net_algae": 1,
            "blue_net_algae": 0,
            "red_net_algae_points": 4,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 22,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 17,
            "blue_total_game_pieces": 13,
            "red_barge_points": 4,
            "blue_barge_points": 14,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_sf5m1",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": true,
        "comp_level": "sf",
        "set_number": 5,
        "match_number": 1,
        "match_name": "Semis 5 Match 1",
        "time": 1740940560,
        "predicted_time": 1740941237,
        "status": "Completed",
        "video": "UqFA4sQgVTY",
        "alliances": {
            "red": {
                "team_keys": [
                    501,
                    8708,
                    8410
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    8013,
                    1277,
                    1058
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.1592,
            "red_score": 63.24,
            "blue_score": 108.03,
            "red_auto_rp": 0.3291,
            "blue_auto_rp": 0.8609,
            "red_coral_rp": 0.032,
            "blue_coral_rp": 0.0386,
            "red_barge_rp": 0.2724,
            "blue_barge_rp": 0.8788,
            "red_rp_1": 0.3291,
            "blue_rp_1": 0.8609,
            "red_rp_2": 0.032,
            "blue_rp_2": 0.0386,
            "red_rp_3": 0.2724,
            "blue_rp_3": 0.8788
        },
        "result": {
            "winner": "red",
            "red_score": 81,
            "blue_score": 77,
            "red_no_foul": 67,
            "blue_no_foul": 77,
            "red_auto_points": 9,
            "blue_auto_points": 16,
            "red_teleop_points": 54,
            "blue_teleop_points": 45,
            "red_endgame_points": 4,
            "blue_endgame_points": 16,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 0,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 7,
            "red_teleop_coral": 12,
            "blue_teleop_coral": 5,
            "red_teleop_coral_points": 54,
            "blue_teleop_coral_points": 25,
            "red_coral_l1": 1,
            "blue_coral_l1": 0,
            "red_coral_l2": 0,
            "blue_coral_l2": 0,
            "red_coral_l3": 3,
            "blue_coral_l3": 0,
            "red_coral_l4": 8,
            "blue_coral_l4": 6,
            "red_total_coral_points": 54,
            "blue_total_coral_points": 32,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 5,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 20,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 20,
            "red_total_game_pieces": 12,
            "blue_total_game_pieces": 11,
            "red_barge_points": 4,
            "blue_barge_points": 16,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_sf6m1",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": true,
        "comp_level": "sf",
        "set_number": 6,
        "match_number": 1,
        "match_name": "Semis 6 Match 1",
        "time": 1740941100,
        "predicted_time": 1740942080,
        "status": "Completed",
        "video": "Aoos7T29fB0",
        "alliances": {
            "red": {
                "team_keys": [
                    319,
                    5962,
                    4925
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    6201,
                    3623,
                    663
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "blue",
            "red_win_prob": 0.3641,
            "red_score": 67.94,
            "blue_score": 82.94,
            "red_auto_rp": 0.6048,
            "blue_auto_rp": 0.5272,
            "red_coral_rp": 0.0482,
            "blue_coral_rp": 0.0457,
            "red_barge_rp": 0.4874,
            "blue_barge_rp": 0.6035,
            "red_rp_1": 0.6048,
            "blue_rp_1": 0.5272,
            "red_rp_2": 0.0482,
            "blue_rp_2": 0.0457,
            "red_rp_3": 0.4874,
            "blue_rp_3": 0.6035
        },
        "result": {
            "winner": "blue",
            "red_score": 54,
            "blue_score": 97,
            "red_no_foul": 48,
            "blue_no_foul": 71,
            "red_auto_points": 6,
            "blue_auto_points": 19,
            "red_teleop_points": 40,
            "blue_teleop_points": 38,
            "red_endgame_points": 2,
            "blue_endgame_points": 14,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 6,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 0,
            "blue_auto_coral": 2,
            "red_auto_coral_points": 0,
            "blue_auto_coral_points": 10,
            "red_teleop_coral": 11,
            "blue_teleop_coral": 8,
            "red_teleop_coral_points": 40,
            "blue_teleop_coral_points": 38,
            "red_coral_l1": 3,
            "blue_coral_l1": 0,
            "red_coral_l2": 3,
            "blue_coral_l2": 0,
            "red_coral_l3": 0,
            "blue_coral_l3": 2,
            "red_coral_l4": 5,
            "blue_coral_l4": 7,
            "red_total_coral_points": 40,
            "blue_total_coral_points": 48,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 11,
            "blue_total_game_pieces": 9,
            "red_barge_points": 2,
            "blue_barge_points": 14,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_sf7m1",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": true,
        "comp_level": "sf",
        "set_number": 7,
        "match_number": 1,
        "match_name": "Semis 7 Match 1",
        "time": 1740941640,
        "predicted_time": 1740942612,
        "status": "Completed",
        "video": "xJot8GgoGt4",
        "alliances": {
            "red": {
                "team_keys": [
                    9443,
                    6328,
                    3467
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    138,
                    6690,
                    2342
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.9137,
            "red_score": 161.16,
            "blue_score": 97.61,
            "red_auto_rp": 0.9539,
            "blue_auto_rp": 0.7658,
            "red_coral_rp": 0.5158,
            "blue_coral_rp": 0.0665,
            "red_barge_rp": 0.877,
            "blue_barge_rp": 0.5663,
            "red_rp_1": 0.9539,
            "blue_rp_1": 0.7658,
            "red_rp_2": 0.5158,
            "blue_rp_2": 0.0665,
            "red_rp_3": 0.877,
            "blue_rp_3": 0.5663
        },
        "result": {
            "winner": "blue",
            "red_score": 118,
            "blue_score": 118,
            "red_no_foul": 118,
            "blue_no_foul": 108,
            "red_auto_points": 44,
            "blue_auto_points": 30,
            "red_teleop_points": 58,
            "blue_teleop_points": 72,
            "red_endgame_points": 16,
            "blue_endgame_points": 6,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 5,
            "blue_auto_coral": 3,
            "red_auto_coral_points": 35,
            "blue_auto_coral_points": 21,
            "red_teleop_coral": 12,
            "blue_teleop_coral": 15,
            "red_teleop_coral_points": 54,
            "blue_teleop_coral_points": 66,
            "red_coral_l1": 0,
            "blue_coral_l1": 1,
            "red_coral_l2": 1,
            "blue_coral_l2": 1,
            "red_coral_l3": 4,
            "blue_coral_l3": 4,
            "red_coral_l4": 12,
            "blue_coral_l4": 12,
            "red_total_coral_points": 89,
            "blue_total_coral_points": 87,
            "red_processor_algae": 0,
            "blue_processor_algae": 1,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 6,
            "red_net_algae": 1,
            "blue_net_algae": 0,
            "red_net_algae_points": 4,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 4,
            "blue_total_algae_points": 6,
            "red_total_game_pieces": 18,
            "blue_total_game_pieces": 19,
            "red_barge_points": 16,
            "blue_barge_points": 6,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_sf8m1",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": true,
        "comp_level": "sf",
        "set_number": 8,
        "match_number": 1,
        "match_name": "Semis 8 Match 1",
        "time": 1740942180,
        "predicted_time": 1740943282,
        "status": "Completed",
        "video": "InORbIMyb64",
        "alliances": {
            "red": {
                "team_keys": [
                    2877,
                    1512,
                    4909
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    1768,
                    1721,
                    9644
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.6641,
            "red_score": 132.99,
            "blue_score": 114.65,
            "red_auto_rp": 0.8542,
            "blue_auto_rp": 0.6332,
            "red_coral_rp": 0.0957,
            "blue_coral_rp": 0.1473,
            "red_barge_rp": 0.6546,
            "blue_barge_rp": 0.5013,
            "red_rp_1": 0.8542,
            "blue_rp_1": 0.6332,
            "red_rp_2": 0.0957,
            "blue_rp_2": 0.1473,
            "red_rp_3": 0.6546,
            "blue_rp_3": 0.5013
        },
        "result": {
            "winner": "red",
            "red_score": 139,
            "blue_score": 63,
            "red_no_foul": 137,
            "blue_no_foul": 63,
            "red_auto_points": 37,
            "blue_auto_points": 13,
            "red_teleop_points": 84,
            "blue_teleop_points": 48,
            "red_endgame_points": 16,
            "blue_endgame_points": 2,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 9,
            "red_auto_coral": 4,
            "blue_auto_coral": 1,
            "red_auto_coral_points": 28,
            "blue_auto_coral_points": 4,
            "red_teleop_coral": 15,
            "blue_teleop_coral": 10,
            "red_teleop_coral_points": 68,
            "blue_teleop_coral_points": 48,
            "red_coral_l1": 0,
            "blue_coral_l1": 0,
            "red_coral_l2": 0,
            "blue_coral_l2": 2,
            "red_coral_l3": 7,
            "blue_coral_l3": 0,
            "red_coral_l4": 12,
            "blue_coral_l4": 9,
            "red_total_coral_points": 96,
            "blue_total_coral_points": 52,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 4,
            "blue_net_algae": 0,
            "red_net_algae_points": 16,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 16,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 23,
            "blue_total_game_pieces": 11,
            "red_barge_points": 16,
            "blue_barge_points": 2,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    },
    {
        "key": "2025nhsal_sf9m1",
        "year": 2025,
        "event": "2025nhsal",
        "week": 1,
        "elim": true,
        "comp_level": "sf",
        "set_number": 9,
        "match_number": 1,
        "match_name": "Semis 9 Match 1",
        "time": 1740942720,
        "predicted_time": 1740943654,
        "status": "Completed",
        "video": "rg00QecxGcw",
        "alliances": {
            "red": {
                "team_keys": [
                    9443,
                    6328,
                    3467
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            },
            "blue": {
                "team_keys": [
                    6201,
                    3623,
                    663
                ],
                "surrogate_team_keys": [],
                "dq_team_keys": []
            }
        },
        "pred": {
            "winner": "red",
            "red_win_prob": 0.9321,
            "red_score": 156.18,
            "blue_score": 85.65,
            "red_auto_rp": 0.9539,
            "blue_auto_rp": 0.5272,
            "red_coral_rp": 0.5158,
            "blue_coral_rp": 0.0457,
            "red_barge_rp": 0.877,
            "blue_barge_rp": 0.6035,
            "red_rp_1": 0.9539,
            "blue_rp_1": 0.5272,
            "red_rp_2": 0.5158,
            "blue_rp_2": 0.0457,
            "red_rp_3": 0.877,
            "blue_rp_3": 0.6035
        },
        "result": {
            "winner": "red",
            "red_score": 170,
            "blue_score": 71,
            "red_no_foul": 170,
            "blue_no_foul": 69,
            "red_auto_points": 30,
            "blue_auto_points": 6,
            "red_teleop_points": 116,
            "blue_teleop_points": 57,
            "red_endgame_points": 24,
            "blue_endgame_points": 6,
            "red_auto_rp": false,
            "blue_auto_rp": false,
            "red_coral_rp": false,
            "blue_coral_rp": false,
            "red_barge_rp": false,
            "blue_barge_rp": false,
            "red_tiebreaker_points": 0,
            "blue_tiebreaker_points": 0,
            "red_auto_leave_points": 9,
            "blue_auto_leave_points": 6,
            "red_auto_coral": 3,
            "blue_auto_coral": 0,
            "red_auto_coral_points": 21,
            "blue_auto_coral_points": 0,
            "red_teleop_coral": 29,
            "blue_teleop_coral": 12,
            "red_teleop_coral_points": 116,
            "blue_teleop_coral_points": 57,
            "red_coral_l1": 1,
            "blue_coral_l1": 1,
            "red_coral_l2": 7,
            "blue_coral_l2": 0,
            "red_coral_l3": 12,
            "blue_coral_l3": 0,
            "red_coral_l4": 12,
            "blue_coral_l4": 11,
            "red_total_coral_points": 137,
            "blue_total_coral_points": 57,
            "red_processor_algae": 0,
            "blue_processor_algae": 0,
            "red_processor_algae_points": 0,
            "blue_processor_algae_points": 0,
            "red_net_algae": 0,
            "blue_net_algae": 0,
            "red_net_algae_points": 0,
            "blue_net_algae_points": 0,
            "red_total_algae_points": 0,
            "blue_total_algae_points": 0,
            "red_total_game_pieces": 32,
            "blue_total_game_pieces": 12,
            "red_barge_points": 24,
            "blue_barge_points": 6,
            "red_rp_1": false,
            "blue_rp_1": false,
            "red_rp_2": false,
            "blue_rp_2": false,
            "red_rp_3": false,
            "blue_rp_3": false
        }
    }
];

const rankings = [
    {
        "team": 3467,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "Windham Windup",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 70.65,
                "sd": 7.01
            },
            "unitless": 1792,
            "norm": 1907,
            "conf": [
                -0.85,
                1.06
            ],
            "breakdown": {
                "total_points": 70.65,
                "auto_points": 16.87,
                "teleop_points": 48.63,
                "endgame_points": 5.15,
                "auto_rp": 0.5485,
                "coral_rp": 0.3951,
                "barge_rp": 0.3744,
                "tiebreaker_points": 0.29,
                "auto_leave_points": 3.5,
                "auto_coral": 2.07,
                "auto_coral_points": 13.37,
                "teleop_coral": 10.55,
                "teleop_coral_points": 42.72,
                "coral_l1": 0.4,
                "coral_l2": 2.57,
                "coral_l3": 3.82,
                "coral_l4": 5.58,
                "total_coral_points": 56.09,
                "processor_algae": 1,
                "processor_algae_points": 2.99,
                "net_algae": 0.73,
                "net_algae_points": 2.92,
                "total_algae_points": 5.91,
                "total_game_pieces": 14.12,
                "barge_points": 5.15,
                "rp_1": 0.5485,
                "rp_2": 0.3951,
                "rp_3": 0.3744
            },
            "stats": {
                "start": 51.23,
                "pre_elim": 67.73,
                "mean": 61.42,
                "max": 69.92
            }
        },
        "record": {
            "qual": {
                "wins": 10,
                "losses": 2,
                "ties": 0,
                "count": 12,
                "winrate": 0.8333,
                "rps": 53,
                "rps_per_match": 4.4167,
                "rank": 1,
                "num_teams": 36
            },
            "elim": {
                "wins": 6,
                "losses": 1,
                "ties": 0,
                "count": 7,
                "winrate": 0.8571428571428571,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 16,
                "losses": 3,
                "ties": 0,
                "count": 19,
                "winrate": 0.8421
            }
        },
        "district_points": 73
    },
    {
        "team": 4909,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "Bionics",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 58.84,
                "sd": 5.89
            },
            "unitless": 1712,
            "norm": 1814,
            "conf": [
                -0.91,
                1.03
            ],
            "breakdown": {
                "total_points": 58.84,
                "auto_points": 14.56,
                "teleop_points": 38.73,
                "endgame_points": 5.54,
                "auto_rp": 0.391,
                "coral_rp": 0.0443,
                "barge_rp": 0.2813,
                "tiebreaker_points": 0.08,
                "auto_leave_points": 3.49,
                "auto_coral": 1.52,
                "auto_coral_points": 11.07,
                "teleop_coral": 8.91,
                "teleop_coral_points": 36.96,
                "coral_l1": 0.62,
                "coral_l2": 1.59,
                "coral_l3": 2.55,
                "coral_l4": 5.77,
                "total_coral_points": 48.03,
                "processor_algae": 0.16,
                "processor_algae_points": 0.47,
                "net_algae": 0.33,
                "net_algae_points": 1.3,
                "total_algae_points": 1.77,
                "total_game_pieces": 11.03,
                "barge_points": 5.54,
                "rp_1": 0.391,
                "rp_2": 0.0443,
                "rp_3": 0.2813
            },
            "stats": {
                "start": 35.32,
                "pre_elim": 59.34,
                "mean": 51.02,
                "max": 59.34
            }
        },
        "record": {
            "qual": {
                "wins": 11,
                "losses": 1,
                "ties": 0,
                "count": 12,
                "winrate": 0.9167,
                "rps": 51,
                "rps_per_match": 4.25,
                "rank": 2,
                "num_teams": 36
            },
            "elim": {
                "wins": 3,
                "losses": 2,
                "ties": 0,
                "count": 5,
                "winrate": 0.6,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 14,
                "losses": 3,
                "ties": 0,
                "count": 17,
                "winrate": 0.8235
            }
        },
        "district_points": 56
    },
    {
        "team": 6328,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "Mechanical Advantage",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 56.68,
                "sd": 5.94
            },
            "unitless": 1697,
            "norm": 1797,
            "conf": [
                -0.84,
                1.07
            ],
            "breakdown": {
                "total_points": 56.68,
                "auto_points": 13.08,
                "teleop_points": 34.09,
                "endgame_points": 9.51,
                "auto_rp": 0.666,
                "coral_rp": 0.154,
                "barge_rp": 0.5227,
                "tiebreaker_points": 0.02,
                "auto_leave_points": 3.81,
                "auto_coral": 1.53,
                "auto_coral_points": 9.26,
                "teleop_coral": 8.45,
                "teleop_coral_points": 33.67,
                "coral_l1": 0.4,
                "coral_l2": 2.47,
                "coral_l3": 3.49,
                "coral_l4": 3.65,
                "total_coral_points": 42.93,
                "processor_algae": 0.68,
                "processor_algae_points": 2.03,
                "net_algae": -0.4,
                "net_algae_points": -1.62,
                "total_algae_points": 0.42,
                "total_game_pieces": 10.28,
                "barge_points": 9.51,
                "rp_1": 0.666,
                "rp_2": 0.154,
                "rp_3": 0.5227
            },
            "stats": {
                "start": 53.52,
                "pre_elim": 55.21,
                "mean": 53.53,
                "max": 56.12
            }
        },
        "record": {
            "qual": {
                "wins": 8,
                "losses": 4,
                "ties": 0,
                "count": 12,
                "winrate": 0.6667,
                "rps": 49,
                "rps_per_match": 4.0833,
                "rank": 3,
                "num_teams": 36
            },
            "elim": {
                "wins": 6,
                "losses": 1,
                "ties": 0,
                "count": 7,
                "winrate": 0.8571428571428571,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 14,
                "losses": 5,
                "ties": 0,
                "count": 19,
                "winrate": 0.7368
            }
        },
        "district_points": 74
    },
    {
        "team": 2877,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "LigerBots",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 54,
                "sd": 5.63
            },
            "unitless": 1679,
            "norm": 1776,
            "conf": [
                -0.77,
                1.14
            ],
            "breakdown": {
                "total_points": 54,
                "auto_points": 16.07,
                "teleop_points": 33.91,
                "endgame_points": 4.02,
                "auto_rp": 0.5729,
                "coral_rp": 0.0363,
                "barge_rp": 0.1856,
                "tiebreaker_points": 0.07,
                "auto_leave_points": 3.7,
                "auto_coral": 1.88,
                "auto_coral_points": 12.37,
                "teleop_coral": 6.96,
                "teleop_coral_points": 29.4,
                "coral_l1": 0.37,
                "coral_l2": 1.08,
                "coral_l3": 2.13,
                "coral_l4": 5.06,
                "total_coral_points": 41.78,
                "processor_algae": 0.17,
                "processor_algae_points": 0.52,
                "net_algae": 0.99,
                "net_algae_points": 3.98,
                "total_algae_points": 4.5,
                "total_game_pieces": 9.8,
                "barge_points": 4.02,
                "rp_1": 0.5729,
                "rp_2": 0.0363,
                "rp_3": 0.1856
            },
            "stats": {
                "start": 36.43,
                "pre_elim": 51.64,
                "mean": 46.91,
                "max": 54.08
            }
        },
        "record": {
            "qual": {
                "wins": 9,
                "losses": 3,
                "ties": 0,
                "count": 12,
                "winrate": 0.75,
                "rps": 46,
                "rps_per_match": 3.8333,
                "rank": 4,
                "num_teams": 36
            },
            "elim": {
                "wins": 3,
                "losses": 2,
                "ties": 0,
                "count": 5,
                "winrate": 0.6,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 12,
                "losses": 5,
                "ties": 0,
                "count": 17,
                "winrate": 0.7059
            }
        },
        "district_points": 59
    },
    {
        "team": 9644,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "NEIA Robotics",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 40.31,
                "sd": 6.42
            },
            "unitless": 1586,
            "norm": 1669,
            "conf": [
                -0.88,
                1.08
            ],
            "breakdown": {
                "total_points": 40.31,
                "auto_points": 4.78,
                "teleop_points": 34.05,
                "endgame_points": 1.48,
                "auto_rp": 0.2267,
                "coral_rp": 0.1482,
                "barge_rp": 0.067,
                "tiebreaker_points": 0.05,
                "auto_leave_points": 2.34,
                "auto_coral": 0.39,
                "auto_coral_points": 2.44,
                "teleop_coral": 8.31,
                "teleop_coral_points": 34.88,
                "coral_l1": 0.67,
                "coral_l2": 1.56,
                "coral_l3": 1.63,
                "coral_l4": 4.81,
                "total_coral_points": 37.32,
                "processor_algae": -0.12,
                "processor_algae_points": -0.35,
                "net_algae": -0.12,
                "net_algae_points": -0.47,
                "total_algae_points": -0.83,
                "total_game_pieces": 8.44,
                "barge_points": 1.48,
                "rp_1": 0.2267,
                "rp_2": 0.1482,
                "rp_3": 0.067
            },
            "stats": {
                "start": 25.15,
                "pre_elim": 39.61,
                "mean": 33.45,
                "max": 40.73
            }
        },
        "record": {
            "qual": {
                "wins": 10,
                "losses": 2,
                "ties": 0,
                "count": 12,
                "winrate": 0.8333,
                "rps": 43,
                "rps_per_match": 3.5833,
                "rank": 5,
                "num_teams": 36
            },
            "elim": {
                "wins": 2,
                "losses": 2,
                "ties": 0,
                "count": 4,
                "winrate": 0.5,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 12,
                "losses": 4,
                "ties": 0,
                "count": 16,
                "winrate": 0.75
            }
        },
        "district_points": 39
    },
    {
        "team": 138,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "Entropy",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 32.24,
                "sd": 5.7
            },
            "unitless": 1531,
            "norm": 1599,
            "conf": [
                -0.88,
                1.08
            ],
            "breakdown": {
                "total_points": 32.24,
                "auto_points": 7.54,
                "teleop_points": 16.98,
                "endgame_points": 7.71,
                "auto_rp": 0.4053,
                "coral_rp": -0.1437,
                "barge_rp": 0.4973,
                "tiebreaker_points": 0.01,
                "auto_leave_points": 3.47,
                "auto_coral": 0.6,
                "auto_coral_points": 4.08,
                "teleop_coral": 4.19,
                "teleop_coral_points": 16.86,
                "coral_l1": 0.44,
                "coral_l2": 1.05,
                "coral_l3": 0.73,
                "coral_l4": 2.56,
                "total_coral_points": 20.94,
                "processor_algae": 0.62,
                "processor_algae_points": 1.85,
                "net_algae": -0.43,
                "net_algae_points": -1.74,
                "total_algae_points": 0.12,
                "total_game_pieces": 4.97,
                "barge_points": 7.71,
                "rp_1": 0.4053,
                "rp_2": -0.1437,
                "rp_3": 0.4973
            },
            "stats": {
                "start": 28.38,
                "pre_elim": 31.67,
                "mean": 29.79,
                "max": 34.32
            }
        },
        "record": {
            "qual": {
                "wins": 8,
                "losses": 4,
                "ties": 0,
                "count": 12,
                "winrate": 0.6667,
                "rps": 43,
                "rps_per_match": 3.5833,
                "rank": 6,
                "num_teams": 36
            },
            "elim": {
                "wins": 2,
                "losses": 2,
                "ties": 0,
                "count": 4,
                "winrate": 0.5,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 10,
                "losses": 6,
                "ties": 0,
                "count": 16,
                "winrate": 0.625
            }
        },
        "district_points": 49
    },
    {
        "team": 8013,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "Boston Lions",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 41.78,
                "sd": 4.13
            },
            "unitless": 1596,
            "norm": 1680,
            "conf": [
                -1,
                0.99
            ],
            "breakdown": {
                "total_points": 41.78,
                "auto_points": 9.22,
                "teleop_points": 26.65,
                "endgame_points": 5.91,
                "auto_rp": 0.3406,
                "coral_rp": -0.1278,
                "barge_rp": 0.4079,
                "tiebreaker_points": -0.02,
                "auto_leave_points": 3.7,
                "auto_coral": 0.81,
                "auto_coral_points": 5.52,
                "teleop_coral": 5.03,
                "teleop_coral_points": 21.77,
                "coral_l1": 0.51,
                "coral_l2": 0.44,
                "coral_l3": 1.22,
                "coral_l4": 3.72,
                "total_coral_points": 27.29,
                "processor_algae": 0.05,
                "processor_algae_points": 0.14,
                "net_algae": 1.18,
                "net_algae_points": 4.74,
                "total_algae_points": 4.88,
                "total_game_pieces": 7.12,
                "barge_points": 5.91,
                "rp_1": 0.3406,
                "rp_2": -0.1278,
                "rp_3": 0.4079
            },
            "stats": {
                "start": 43.27,
                "pre_elim": 43.58,
                "mean": 42.07,
                "max": 44.23
            }
        },
        "record": {
            "qual": {
                "wins": 8,
                "losses": 4,
                "ties": 0,
                "count": 12,
                "winrate": 0.6667,
                "rps": 40,
                "rps_per_match": 3.3333,
                "rank": 7,
                "num_teams": 36
            },
            "elim": {
                "wins": 0,
                "losses": 2,
                "ties": 0,
                "count": 2,
                "winrate": 0,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 8,
                "losses": 6,
                "ties": 0,
                "count": 14,
                "winrate": 0.5714
            }
        },
        "district_points": 29
    },
    {
        "team": 6201,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "The Highlanders",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 28.76,
                "sd": 6.35
            },
            "unitless": 1507,
            "norm": 1567,
            "conf": [
                -0.89,
                1.08
            ],
            "breakdown": {
                "total_points": 28.76,
                "auto_points": 8.06,
                "teleop_points": 15.95,
                "endgame_points": 4.75,
                "auto_rp": 0.2655,
                "coral_rp": -0.0652,
                "barge_rp": 0.2384,
                "tiebreaker_points": 0.08,
                "auto_leave_points": 2.73,
                "auto_coral": 0.75,
                "auto_coral_points": 5.32,
                "teleop_coral": 4.07,
                "teleop_coral_points": 15.72,
                "coral_l1": 1.14,
                "coral_l2": 0.4,
                "coral_l3": 0.45,
                "coral_l4": 2.79,
                "total_coral_points": 21.04,
                "processor_algae": -0.06,
                "processor_algae_points": -0.19,
                "net_algae": 0.1,
                "net_algae_points": 0.42,
                "total_algae_points": 0.23,
                "total_game_pieces": 4.84,
                "barge_points": 4.75,
                "rp_1": 0.2655,
                "rp_2": -0.0652,
                "rp_3": 0.2384
            },
            "stats": {
                "start": 19.7,
                "pre_elim": 28.23,
                "mean": 25.72,
                "max": 30.36
            }
        },
        "record": {
            "qual": {
                "wins": 8,
                "losses": 4,
                "ties": 0,
                "count": 12,
                "winrate": 0.6667,
                "rps": 40,
                "rps_per_match": 3.3333,
                "rank": 8,
                "num_teams": 36
            },
            "elim": {
                "wins": 1,
                "losses": 2,
                "ties": 0,
                "count": 3,
                "winrate": 0.3333333333333333,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 9,
                "losses": 6,
                "ties": 0,
                "count": 15,
                "winrate": 0.6
            }
        },
        "district_points": 33
    },
    {
        "team": 1058,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "PVC Pirates",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 39.12,
                "sd": 4.17
            },
            "unitless": 1578,
            "norm": 1660,
            "conf": [
                -0.96,
                1.04
            ],
            "breakdown": {
                "total_points": 39.12,
                "auto_points": 11.21,
                "teleop_points": 20.95,
                "endgame_points": 6.96,
                "auto_rp": 0.4082,
                "coral_rp": -0.0317,
                "barge_rp": 0.3704,
                "tiebreaker_points": 0.08,
                "auto_leave_points": 3.43,
                "auto_coral": 1.19,
                "auto_coral_points": 7.78,
                "teleop_coral": 4.77,
                "teleop_coral_points": 19.42,
                "coral_l1": 1.07,
                "coral_l2": 0.38,
                "coral_l3": 0.44,
                "coral_l4": 3.92,
                "total_coral_points": 27.21,
                "processor_algae": 0.13,
                "processor_algae_points": 0.38,
                "net_algae": 0.29,
                "net_algae_points": 1.14,
                "total_algae_points": 1.52,
                "total_game_pieces": 6.23,
                "barge_points": 6.96,
                "rp_1": 0.4082,
                "rp_2": -0.0317,
                "rp_3": 0.3704
            },
            "stats": {
                "start": 35.8,
                "pre_elim": 40.7,
                "mean": 37.25,
                "max": 40.7
            }
        },
        "record": {
            "qual": {
                "wins": 7,
                "losses": 5,
                "ties": 0,
                "count": 12,
                "winrate": 0.5833,
                "rps": 39,
                "rps_per_match": 3.25,
                "rank": 9,
                "num_teams": 36
            },
            "elim": {
                "wins": 0,
                "losses": 2,
                "ties": 0,
                "count": 2,
                "winrate": 0,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 7,
                "losses": 7,
                "ties": 0,
                "count": 14,
                "winrate": 0.5
            }
        },
        "district_points": 33
    },
    {
        "team": 1768,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "Nashoba Robotics",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 44.8,
                "sd": 5.25
            },
            "unitless": 1616,
            "norm": 1704,
            "conf": [
                -1.08,
                0.88
            ],
            "breakdown": {
                "total_points": 44.8,
                "auto_points": 6.13,
                "teleop_points": 35.1,
                "endgame_points": 3.56,
                "auto_rp": 0.2351,
                "coral_rp": -0.0383,
                "barge_rp": 0.2002,
                "tiebreaker_points": 0.02,
                "auto_leave_points": 3.61,
                "auto_coral": 0.44,
                "auto_coral_points": 2.52,
                "teleop_coral": 8.07,
                "teleop_coral_points": 31.31,
                "coral_l1": 0.88,
                "coral_l2": 1.87,
                "coral_l3": 2.69,
                "coral_l4": 2.95,
                "total_coral_points": 33.84,
                "processor_algae": 0.84,
                "processor_algae_points": 2.51,
                "net_algae": 0.32,
                "net_algae_points": 1.28,
                "total_algae_points": 3.79,
                "total_game_pieces": 9.54,
                "barge_points": 3.56,
                "rp_1": 0.2351,
                "rp_2": -0.0383,
                "rp_3": 0.2002
            },
            "stats": {
                "start": 42.25,
                "pre_elim": 46.52,
                "mean": 45.06,
                "max": 46.72
            }
        },
        "record": {
            "qual": {
                "wins": 8,
                "losses": 4,
                "ties": 0,
                "count": 12,
                "winrate": 0.6667,
                "rps": 36,
                "rps_per_match": 3,
                "rank": 10,
                "num_teams": 36
            },
            "elim": {
                "wins": 2,
                "losses": 2,
                "ties": 0,
                "count": 4,
                "winrate": 0.5,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 10,
                "losses": 6,
                "ties": 0,
                "count": 16,
                "winrate": 0.625
            }
        },
        "district_points": 42
    },
    {
        "team": 2342,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "Team Phoenix",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 39.38,
                "sd": 6.2
            },
            "unitless": 1580,
            "norm": 1662,
            "conf": [
                -0.74,
                1.16
            ],
            "breakdown": {
                "total_points": 39.38,
                "auto_points": 6.88,
                "teleop_points": 28.62,
                "endgame_points": 3.87,
                "auto_rp": 0.3138,
                "coral_rp": 0.0487,
                "barge_rp": 0.2041,
                "tiebreaker_points": -0.01,
                "auto_leave_points": 2.46,
                "auto_coral": 0.64,
                "auto_coral_points": 4.43,
                "teleop_coral": 5.91,
                "teleop_coral_points": 27.5,
                "coral_l1": -0.19,
                "coral_l2": 0.64,
                "coral_l3": 1.28,
                "coral_l4": 4.78,
                "total_coral_points": 31.93,
                "processor_algae": -0.09,
                "processor_algae_points": -0.28,
                "net_algae": 0.35,
                "net_algae_points": 1.4,
                "total_algae_points": 1.12,
                "total_game_pieces": 6.78,
                "barge_points": 3.87,
                "rp_1": 0.3138,
                "rp_2": 0.0487,
                "rp_3": 0.2041
            },
            "stats": {
                "start": 27.29,
                "pre_elim": 35.07,
                "mean": 33.51,
                "max": 39.19
            }
        },
        "record": {
            "qual": {
                "wins": 7,
                "losses": 5,
                "ties": 0,
                "count": 12,
                "winrate": 0.5833,
                "rps": 35,
                "rps_per_match": 2.9167,
                "rank": 11,
                "num_teams": 36
            },
            "elim": {
                "wins": 2,
                "losses": 2,
                "ties": 0,
                "count": 4,
                "winrate": 0.5,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 9,
                "losses": 7,
                "ties": 0,
                "count": 16,
                "winrate": 0.5625
            }
        },
        "district_points": 51
    },
    {
        "team": 663,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "Power Sharks",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 30.49,
                "sd": 4.8
            },
            "unitless": 1519,
            "norm": 1583,
            "conf": [
                -0.93,
                1.04
            ],
            "breakdown": {
                "total_points": 30.49,
                "auto_points": 3.67,
                "teleop_points": 23.51,
                "endgame_points": 3.31,
                "auto_rp": 0.1865,
                "coral_rp": -0.0484,
                "barge_rp": 0.2422,
                "tiebreaker_points": 0,
                "auto_leave_points": 2.47,
                "auto_coral": 0.21,
                "auto_coral_points": 1.2,
                "teleop_coral": 5.33,
                "teleop_coral_points": 23.07,
                "coral_l1": 0.24,
                "coral_l2": 1.1,
                "coral_l3": 0.57,
                "coral_l4": 3.54,
                "total_coral_points": 24.27,
                "processor_algae": -0.01,
                "processor_algae_points": -0.02,
                "net_algae": 0.11,
                "net_algae_points": 0.46,
                "total_algae_points": 0.44,
                "total_game_pieces": 5.55,
                "barge_points": 3.31,
                "rp_1": 0.1865,
                "rp_2": -0.0484,
                "rp_3": 0.2422
            },
            "stats": {
                "start": 23.18,
                "pre_elim": 31.66,
                "mean": 26.32,
                "max": 32.27
            }
        },
        "record": {
            "qual": {
                "wins": 6,
                "losses": 6,
                "ties": 0,
                "count": 12,
                "winrate": 0.5,
                "rps": 32,
                "rps_per_match": 2.6667,
                "rank": 12,
                "num_teams": 36
            },
            "elim": {
                "wins": 1,
                "losses": 2,
                "ties": 0,
                "count": 3,
                "winrate": 0.3333333333333333,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 7,
                "losses": 8,
                "ties": 0,
                "count": 15,
                "winrate": 0.4667
            }
        },
        "district_points": 31
    },
    {
        "team": 4925,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "The Resistance",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 17.52,
                "sd": 8.2
            },
            "unitless": 1431,
            "norm": 1461,
            "conf": [
                -0.91,
                1.08
            ],
            "breakdown": {
                "total_points": 17.52,
                "auto_points": 5.07,
                "teleop_points": 8.6,
                "endgame_points": 3.85,
                "auto_rp": 0.3572,
                "coral_rp": -0.0606,
                "barge_rp": 0.2927,
                "tiebreaker_points": -0.06,
                "auto_leave_points": 2.3,
                "auto_coral": 0.66,
                "auto_coral_points": 2.77,
                "teleop_coral": 2.32,
                "teleop_coral_points": 7.31,
                "coral_l1": 0.83,
                "coral_l2": 0.52,
                "coral_l3": 0.75,
                "coral_l4": 0.42,
                "total_coral_points": 10.08,
                "processor_algae": -0.19,
                "processor_algae_points": -0.58,
                "net_algae": 0.47,
                "net_algae_points": 1.88,
                "total_algae_points": 1.29,
                "total_game_pieces": 2.8,
                "barge_points": 3.85,
                "rp_1": 0.3572,
                "rp_2": -0.0606,
                "rp_3": 0.2927
            },
            "stats": {
                "start": 12.38,
                "pre_elim": 18.97,
                "mean": 10.09,
                "max": 18.97
            }
        },
        "record": {
            "qual": {
                "wins": 5,
                "losses": 7,
                "ties": 0,
                "count": 12,
                "winrate": 0.4167,
                "rps": 32,
                "rps_per_match": 2.6667,
                "rank": 13,
                "num_teams": 36
            },
            "elim": {
                "wins": 0,
                "losses": 2,
                "ties": 0,
                "count": 2,
                "winrate": 0,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 5,
                "losses": 9,
                "ties": 0,
                "count": 14,
                "winrate": 0.3571
            }
        },
        "district_points": 25
    },
    {
        "team": 5962,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "perSEVERE",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 12.79,
                "sd": 6.2
            },
            "unitless": 1399,
            "norm": 1414,
            "conf": [
                -0.91,
                1.09
            ],
            "breakdown": {
                "total_points": 12.79,
                "auto_points": 4.95,
                "teleop_points": 6.17,
                "endgame_points": 1.68,
                "auto_rp": 0.243,
                "coral_rp": -0.1479,
                "barge_rp": 0.0748,
                "tiebreaker_points": -0.07,
                "auto_leave_points": 3.16,
                "auto_coral": 0.29,
                "auto_coral_points": 1.78,
                "teleop_coral": 1.67,
                "teleop_coral_points": 8.07,
                "coral_l1": -0.09,
                "coral_l2": 0.21,
                "coral_l3": 0.2,
                "coral_l4": 1.61,
                "total_coral_points": 9.85,
                "processor_algae": -0.11,
                "processor_algae_points": -0.33,
                "net_algae": -0.39,
                "net_algae_points": -1.57,
                "total_algae_points": -1.9,
                "total_game_pieces": 1.42,
                "barge_points": 1.68,
                "rp_1": 0.243,
                "rp_2": -0.1479,
                "rp_3": 0.0748
            },
            "stats": {
                "start": 22.21,
                "pre_elim": 14.36,
                "mean": 13.32,
                "max": 22.21
            }
        },
        "record": {
            "qual": {
                "wins": 7,
                "losses": 5,
                "ties": 0,
                "count": 12,
                "winrate": 0.5833,
                "rps": 32,
                "rps_per_match": 2.6667,
                "rank": 14,
                "num_teams": 36
            },
            "elim": {
                "wins": 0,
                "losses": 2,
                "ties": 0,
                "count": 2,
                "winrate": 0,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 7,
                "losses": 7,
                "ties": 0,
                "count": 14,
                "winrate": 0.5
            }
        },
        "district_points": 24
    },
    {
        "team": 8708,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "Ov3R1y K0Mp13X",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 22.15,
                "sd": 5.05
            },
            "unitless": 1463,
            "norm": 1506,
            "conf": [
                -0.74,
                1.17
            ],
            "breakdown": {
                "total_points": 22.15,
                "auto_points": 3.75,
                "teleop_points": 15.05,
                "endgame_points": 3.36,
                "auto_rp": 0.1019,
                "coral_rp": -0.0502,
                "barge_rp": 0.1845,
                "tiebreaker_points": -0.09,
                "auto_leave_points": 3.02,
                "auto_coral": 0.16,
                "auto_coral_points": 0.73,
                "teleop_coral": 3.45,
                "teleop_coral_points": 14.9,
                "coral_l1": 0.78,
                "coral_l2": -0.07,
                "coral_l3": 0.21,
                "coral_l4": 2.62,
                "total_coral_points": 15.63,
                "processor_algae": 0.24,
                "processor_algae_points": 0.73,
                "net_algae": -0.15,
                "net_algae_points": -0.59,
                "total_algae_points": 0.15,
                "total_game_pieces": 3.64,
                "barge_points": 3.36,
                "rp_1": 0.1019,
                "rp_2": -0.0502,
                "rp_3": 0.1845
            },
            "stats": {
                "start": 26.2,
                "pre_elim": 19.03,
                "mean": 20.09,
                "max": 26.2
            }
        },
        "record": {
            "qual": {
                "wins": 6,
                "losses": 6,
                "ties": 0,
                "count": 12,
                "winrate": 0.5,
                "rps": 30,
                "rps_per_match": 2.5,
                "rank": 15,
                "num_teams": 36
            },
            "elim": {
                "wins": 1,
                "losses": 2,
                "ties": 0,
                "count": 3,
                "winrate": 0.3333333333333333,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 7,
                "losses": 8,
                "ties": 0,
                "count": 15,
                "winrate": 0.4667
            }
        },
        "district_points": 28
    },
    {
        "team": 8410,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "Oyster River Overdrive",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 19.13,
                "sd": 4.78
            },
            "unitless": 1442,
            "norm": 1477,
            "conf": [
                -0.93,
                1.05
            ],
            "breakdown": {
                "total_points": 19.13,
                "auto_points": 4.28,
                "teleop_points": 12.53,
                "endgame_points": 2.31,
                "auto_rp": 0.1804,
                "coral_rp": -0.1476,
                "barge_rp": 0.1834,
                "tiebreaker_points": -0.01,
                "auto_leave_points": 3.13,
                "auto_coral": 0.22,
                "auto_coral_points": 1.15,
                "teleop_coral": 3.01,
                "teleop_coral_points": 13.41,
                "coral_l1": 0.43,
                "coral_l2": -0.01,
                "coral_l3": 0.41,
                "coral_l4": 2.32,
                "total_coral_points": 14.56,
                "processor_algae": 0.02,
                "processor_algae_points": 0.05,
                "net_algae": -0.23,
                "net_algae_points": -0.93,
                "total_algae_points": -0.88,
                "total_game_pieces": 2.94,
                "barge_points": 2.31,
                "rp_1": 0.1804,
                "rp_2": -0.1476,
                "rp_3": 0.1834
            },
            "stats": {
                "start": 27.27,
                "pre_elim": 16.78,
                "mean": 19.82,
                "max": 27.27
            }
        },
        "record": {
            "qual": {
                "wins": 6,
                "losses": 6,
                "ties": 0,
                "count": 12,
                "winrate": 0.5,
                "rps": 30,
                "rps_per_match": 2.5,
                "rank": 16,
                "num_teams": 36
            },
            "elim": {
                "wins": 1,
                "losses": 2,
                "ties": 0,
                "count": 3,
                "winrate": 0.3333333333333333,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 7,
                "losses": 8,
                "ties": 0,
                "count": 15,
                "winrate": 0.4667
            }
        },
        "district_points": 28
    },
    {
        "team": 1277,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "The Robotomies",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 19.4,
                "sd": 5.03
            },
            "unitless": 1444,
            "norm": 1479,
            "conf": [
                -1.01,
                0.98
            ],
            "breakdown": {
                "total_points": 19.4,
                "auto_points": 1.96,
                "teleop_points": 12.85,
                "endgame_points": 4.59,
                "auto_rp": 0.207,
                "coral_rp": -0.1445,
                "barge_rp": 0.2169,
                "tiebreaker_points": -0.07,
                "auto_leave_points": 2.47,
                "auto_coral": -0.09,
                "auto_coral_points": -0.52,
                "teleop_coral": 2.67,
                "teleop_coral_points": 11.87,
                "coral_l1": 0.45,
                "coral_l2": 0.07,
                "coral_l3": -0.07,
                "coral_l4": 2.14,
                "total_coral_points": 11.35,
                "processor_algae": 0.11,
                "processor_algae_points": 0.34,
                "net_algae": 0.16,
                "net_algae_points": 0.65,
                "total_algae_points": 0.98,
                "total_game_pieces": 2.87,
                "barge_points": 4.59,
                "rp_1": 0.207,
                "rp_2": -0.1445,
                "rp_3": 0.2169
            },
            "stats": {
                "start": 23.88,
                "pre_elim": 21.41,
                "mean": 20.17,
                "max": 24.02
            }
        },
        "record": {
            "qual": {
                "wins": 5,
                "losses": 7,
                "ties": 0,
                "count": 12,
                "winrate": 0.4167,
                "rps": 27,
                "rps_per_match": 2.25,
                "rank": 17,
                "num_teams": 36
            },
            "elim": {
                "wins": 0,
                "losses": 2,
                "ties": 0,
                "count": 2,
                "winrate": 0,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 5,
                "losses": 9,
                "ties": 0,
                "count": 14,
                "winrate": 0.3571
            }
        },
        "district_points": 18
    },
    {
        "team": 97,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "Bionic Beef",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 11.73,
                "sd": 6.49
            },
            "unitless": 1392,
            "norm": 1404,
            "conf": [
                -1,
                1.04
            ],
            "breakdown": {
                "total_points": 11.73,
                "auto_points": 2.97,
                "teleop_points": 6.47,
                "endgame_points": 2.29,
                "auto_rp": -0.0342,
                "coral_rp": -0.1426,
                "barge_rp": 0.112,
                "tiebreaker_points": -0.03,
                "auto_leave_points": 2.38,
                "auto_coral": 0.07,
                "auto_coral_points": 0.59,
                "teleop_coral": 1.44,
                "teleop_coral_points": 5.57,
                "coral_l1": 0.43,
                "coral_l2": 0.14,
                "coral_l3": 0.01,
                "coral_l4": 0.94,
                "total_coral_points": 6.16,
                "processor_algae": 0.24,
                "processor_algae_points": 0.71,
                "net_algae": 0.05,
                "net_algae_points": 0.2,
                "total_algae_points": 0.9,
                "total_game_pieces": 1.8,
                "barge_points": 2.29,
                "rp_1": -0.0342,
                "rp_2": -0.1426,
                "rp_3": 0.112
            },
            "stats": {
                "start": 15.67,
                "pre_elim": 13.12,
                "mean": 12.03,
                "max": 15.67
            }
        },
        "record": {
            "qual": {
                "wins": 6,
                "losses": 5,
                "ties": 1,
                "count": 12,
                "winrate": 0.5417,
                "rps": 27,
                "rps_per_match": 2.25,
                "rank": 18,
                "num_teams": 36
            },
            "elim": {
                "wins": 0,
                "losses": 0,
                "ties": 0,
                "count": 0,
                "winrate": 0,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 6,
                "losses": 5,
                "ties": 1,
                "count": 12,
                "winrate": 0.5417
            }
        },
        "district_points": 13
    },
    {
        "team": 1721,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "Tidal Force",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 15.65,
                "sd": 6.25
            },
            "unitless": 1419,
            "norm": 1443,
            "conf": [
                -0.95,
                1.01
            ],
            "breakdown": {
                "total_points": 15.65,
                "auto_points": 2.57,
                "teleop_points": 11.25,
                "endgame_points": 1.83,
                "auto_rp": 0.1747,
                "coral_rp": -0.0489,
                "barge_rp": 0.2341,
                "tiebreaker_points": 0.12,
                "auto_leave_points": 3.09,
                "auto_coral": -0.02,
                "auto_coral_points": -0.52,
                "teleop_coral": 1.84,
                "teleop_coral_points": 8.35,
                "coral_l1": -0.01,
                "coral_l2": 0.21,
                "coral_l3": 0.54,
                "coral_l4": 0.94,
                "total_coral_points": 7.82,
                "processor_algae": 1.56,
                "processor_algae_points": 4.68,
                "net_algae": -0.44,
                "net_algae_points": -1.78,
                "total_algae_points": 2.9,
                "total_game_pieces": 2.8,
                "barge_points": 1.83,
                "rp_1": 0.1747,
                "rp_2": -0.0489,
                "rp_3": 0.2341
            },
            "stats": {
                "start": 22.43,
                "pre_elim": 15.11,
                "mean": 15.06,
                "max": 22.43
            }
        },
        "record": {
            "qual": {
                "wins": 5,
                "losses": 7,
                "ties": 0,
                "count": 12,
                "winrate": 0.4167,
                "rps": 27,
                "rps_per_match": 2.25,
                "rank": 19,
                "num_teams": 36
            },
            "elim": {
                "wins": 2,
                "losses": 2,
                "ties": 0,
                "count": 4,
                "winrate": 0.5,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 7,
                "losses": 9,
                "ties": 0,
                "count": 16,
                "winrate": 0.4375
            }
        },
        "district_points": 22
    },
    {
        "team": 1247,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "Blood, Sweat, and Gears",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 13.07,
                "sd": 5.33
            },
            "unitless": 1401,
            "norm": 1417,
            "conf": [
                -1.18,
                0.83
            ],
            "breakdown": {
                "total_points": 13.07,
                "auto_points": 4.39,
                "teleop_points": 5.92,
                "endgame_points": 2.76,
                "auto_rp": 0.2739,
                "coral_rp": -0.1359,
                "barge_rp": 0.0943,
                "tiebreaker_points": -0.03,
                "auto_leave_points": 2.48,
                "auto_coral": 0.27,
                "auto_coral_points": 1.91,
                "teleop_coral": 1.23,
                "teleop_coral_points": 6.47,
                "coral_l1": -0.29,
                "coral_l2": 0.13,
                "coral_l3": 0.29,
                "coral_l4": 1.38,
                "total_coral_points": 8.38,
                "processor_algae": -0.26,
                "processor_algae_points": -0.77,
                "net_algae": 0.06,
                "net_algae_points": 0.22,
                "total_algae_points": -0.54,
                "total_game_pieces": 1.31,
                "barge_points": 2.76,
                "rp_1": 0.2739,
                "rp_2": -0.1359,
                "rp_3": 0.0943
            },
            "stats": {
                "start": 15.85,
                "pre_elim": 14.46,
                "mean": 18.19,
                "max": 21.72
            }
        },
        "record": {
            "qual": {
                "wins": 5,
                "losses": 6,
                "ties": 1,
                "count": 12,
                "winrate": 0.4583,
                "rps": 27,
                "rps_per_match": 2.25,
                "rank": 20,
                "num_teams": 36
            },
            "elim": {
                "wins": 0,
                "losses": 0,
                "ties": 0,
                "count": 0,
                "winrate": 0,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 5,
                "losses": 6,
                "ties": 1,
                "count": 12,
                "winrate": 0.4583
            }
        },
        "district_points": 12
    },
    {
        "team": 10156,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "Marshy Machines 10156",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 9.57,
                "sd": 3.1
            },
            "unitless": 1377,
            "norm": 1382,
            "conf": [
                -1.01,
                1.03
            ],
            "breakdown": {
                "total_points": 9.57,
                "auto_points": 2.86,
                "teleop_points": 6.19,
                "endgame_points": 0.53,
                "auto_rp": 0.0471,
                "coral_rp": -0.154,
                "barge_rp": -0.0792,
                "tiebreaker_points": -0.01,
                "auto_leave_points": 1.33,
                "auto_coral": 0.4,
                "auto_coral_points": 1.53,
                "teleop_coral": 2.57,
                "teleop_coral_points": 7.02,
                "coral_l1": 2.42,
                "coral_l2": -0.35,
                "coral_l3": -0.73,
                "coral_l4": 1.31,
                "total_coral_points": 8.54,
                "processor_algae": 0.24,
                "processor_algae_points": 0.71,
                "net_algae": -0.38,
                "net_algae_points": -1.54,
                "total_algae_points": -0.83,
                "total_game_pieces": 2.5,
                "barge_points": 0.53,
                "rp_1": 0.0471,
                "rp_2": -0.154,
                "rp_3": -0.0792
            },
            "stats": {
                "start": 18.04,
                "pre_elim": 8.87,
                "mean": 12.31,
                "max": 19.3
            }
        },
        "record": {
            "qual": {
                "wins": 7,
                "losses": 5,
                "ties": 0,
                "count": 12,
                "winrate": 0.5833,
                "rps": 27,
                "rps_per_match": 2.25,
                "rank": 21,
                "num_teams": 36
            },
            "elim": {
                "wins": 0,
                "losses": 0,
                "ties": 0,
                "count": 0,
                "winrate": 0,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 7,
                "losses": 5,
                "ties": 0,
                "count": 12,
                "winrate": 0.5833
            }
        },
        "district_points": 20
    },
    {
        "team": 501,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "The PowerKnights",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 19.6,
                "sd": 5.74
            },
            "unitless": 1445,
            "norm": 1481,
            "conf": [
                -0.93,
                1.05
            ],
            "breakdown": {
                "total_points": 19.6,
                "auto_points": 5.09,
                "teleop_points": 13.06,
                "endgame_points": 1.45,
                "auto_rp": 0.0396,
                "coral_rp": -0.1546,
                "barge_rp": -0.1136,
                "tiebreaker_points": -0.06,
                "auto_leave_points": 3.25,
                "auto_coral": 0.29,
                "auto_coral_points": 1.84,
                "teleop_coral": 2.38,
                "teleop_coral_points": 10.77,
                "coral_l1": 0.12,
                "coral_l2": 0.07,
                "coral_l3": 0.59,
                "coral_l4": 1.82,
                "total_coral_points": 12.6,
                "processor_algae": -0.3,
                "processor_algae_points": -0.91,
                "net_algae": 0.8,
                "net_algae_points": 3.2,
                "total_algae_points": 2.29,
                "total_game_pieces": 3.1,
                "barge_points": 1.45,
                "rp_1": 0.0396,
                "rp_2": -0.1546,
                "rp_3": -0.1136
            },
            "stats": {
                "start": 22.15,
                "pre_elim": 17.99,
                "mean": 18.17,
                "max": 22.38
            }
        },
        "record": {
            "qual": {
                "wins": 7,
                "losses": 5,
                "ties": 0,
                "count": 12,
                "winrate": 0.5833,
                "rps": 26,
                "rps_per_match": 2.1667,
                "rank": 22,
                "num_teams": 36
            },
            "elim": {
                "wins": 1,
                "losses": 2,
                "ties": 0,
                "count": 3,
                "winrate": 0.3333333333333333,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 8,
                "losses": 7,
                "ties": 0,
                "count": 15,
                "winrate": 0.5333
            }
        },
        "district_points": 24
    },
    {
        "team": 6620,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "Voltage Vikings",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 8.29,
                "sd": 4.99
            },
            "unitless": 1369,
            "norm": 1369,
            "conf": [
                -0.96,
                1.07
            ],
            "breakdown": {
                "total_points": 8.29,
                "auto_points": 4.02,
                "teleop_points": 2.83,
                "endgame_points": 1.44,
                "auto_rp": 0.1275,
                "coral_rp": -0.1365,
                "barge_rp": 0.0029,
                "tiebreaker_points": 0.04,
                "auto_leave_points": 2.24,
                "auto_coral": 0.33,
                "auto_coral_points": 1.78,
                "teleop_coral": 0.65,
                "teleop_coral_points": 2.1,
                "coral_l1": 0.44,
                "coral_l2": -0.08,
                "coral_l3": -0.05,
                "coral_l4": 0.52,
                "total_coral_points": 3.88,
                "processor_algae": 0.15,
                "processor_algae_points": 0.45,
                "net_algae": 0.07,
                "net_algae_points": 0.28,
                "total_algae_points": 0.72,
                "total_game_pieces": 1.05,
                "barge_points": 1.44,
                "rp_1": 0.1275,
                "rp_2": -0.1365,
                "rp_3": 0.0029
            },
            "stats": {
                "start": 20.5,
                "pre_elim": 6.42,
                "mean": 12.07,
                "max": 20.5
            }
        },
        "record": {
            "qual": {
                "wins": 6,
                "losses": 6,
                "ties": 0,
                "count": 12,
                "winrate": 0.5,
                "rps": 25,
                "rps_per_match": 2.0833,
                "rank": 23,
                "num_teams": 36
            },
            "elim": {
                "wins": 0,
                "losses": 0,
                "ties": 0,
                "count": 0,
                "winrate": 0,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 6,
                "losses": 6,
                "ties": 0,
                "count": 12,
                "winrate": 0.5
            }
        },
        "district_points": 11
    },
    {
        "team": 1512,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "The Big Red",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 6.25,
                "sd": 3.64
            },
            "unitless": 1355,
            "norm": 1348,
            "conf": [
                -1,
                0.94
            ],
            "breakdown": {
                "total_points": 6.25,
                "auto_points": 3.56,
                "teleop_points": -0.59,
                "endgame_points": 3.28,
                "auto_rp": -0.0219,
                "coral_rp": -0.1419,
                "barge_rp": 0.1929,
                "tiebreaker_points": -0.03,
                "auto_leave_points": 1.62,
                "auto_coral": 0.47,
                "auto_coral_points": 1.94,
                "teleop_coral": -0.08,
                "teleop_coral_points": 1.1,
                "coral_l1": -0.17,
                "coral_l2": -0.54,
                "coral_l3": 0.12,
                "coral_l4": 0.66,
                "total_coral_points": 3.05,
                "processor_algae": 0.01,
                "processor_algae_points": 0.04,
                "net_algae": -0.43,
                "net_algae_points": -1.74,
                "total_algae_points": -1.7,
                "total_game_pieces": -0.36,
                "barge_points": 3.28,
                "rp_1": -0.0219,
                "rp_2": -0.1419,
                "rp_3": 0.1929
            },
            "stats": {
                "start": 21.35,
                "pre_elim": 6.62,
                "mean": 9.93,
                "max": 21.35
            }
        },
        "record": {
            "qual": {
                "wins": 5,
                "losses": 7,
                "ties": 0,
                "count": 12,
                "winrate": 0.4167,
                "rps": 24,
                "rps_per_match": 2,
                "rank": 24,
                "num_teams": 36
            },
            "elim": {
                "wins": 3,
                "losses": 2,
                "ties": 0,
                "count": 5,
                "winrate": 0.6,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 8,
                "losses": 9,
                "ties": 0,
                "count": 17,
                "winrate": 0.4706
            }
        },
        "district_points": 33
    },
    {
        "team": 319,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "Big Bad Bob",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 28.01,
                "sd": 5.54
            },
            "unitless": 1502,
            "norm": 1560,
            "conf": [
                -1,
                0.99
            ],
            "breakdown": {
                "total_points": 28.01,
                "auto_points": 2.48,
                "teleop_points": 21.93,
                "endgame_points": 3.6,
                "auto_rp": 0.0063,
                "coral_rp": -0.0374,
                "barge_rp": 0.1199,
                "tiebreaker_points": 0.15,
                "auto_leave_points": 2.91,
                "auto_coral": -0.08,
                "auto_coral_points": -0.43,
                "teleop_coral": 3.97,
                "teleop_coral_points": 16.55,
                "coral_l1": 0.24,
                "coral_l2": 0.87,
                "coral_l3": 0.74,
                "coral_l4": 2.04,
                "total_coral_points": 16.12,
                "processor_algae": 1.93,
                "processor_algae_points": 5.8,
                "net_algae": -0.1,
                "net_algae_points": -0.42,
                "total_algae_points": 5.38,
                "total_game_pieces": 5.72,
                "barge_points": 3.6,
                "rp_1": 0.0063,
                "rp_2": -0.0374,
                "rp_3": 0.1199
            },
            "stats": {
                "start": 32.77,
                "pre_elim": 27.46,
                "mean": 29.15,
                "max": 32.77
            }
        },
        "record": {
            "qual": {
                "wins": 5,
                "losses": 7,
                "ties": 0,
                "count": 12,
                "winrate": 0.4167,
                "rps": 23,
                "rps_per_match": 1.9167,
                "rank": 25,
                "num_teams": 36
            },
            "elim": {
                "wins": 0,
                "losses": 2,
                "ties": 0,
                "count": 2,
                "winrate": 0,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 5,
                "losses": 9,
                "ties": 0,
                "count": 14,
                "winrate": 0.3571
            }
        },
        "district_points": 17
    },
    {
        "team": 811,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "Wild Cards",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 15.15,
                "sd": 3.71
            },
            "unitless": 1415,
            "norm": 1438,
            "conf": [
                -1,
                1.03
            ],
            "breakdown": {
                "total_points": 15.15,
                "auto_points": 4.02,
                "teleop_points": 9.92,
                "endgame_points": 1.21,
                "auto_rp": 0.1417,
                "coral_rp": -0.0566,
                "barge_rp": -0.0114,
                "tiebreaker_points": 0.08,
                "auto_leave_points": 3.07,
                "auto_coral": 0.13,
                "auto_coral_points": 0.96,
                "teleop_coral": 2.31,
                "teleop_coral_points": 8.12,
                "coral_l1": 0.8,
                "coral_l2": 0.32,
                "coral_l3": 0.41,
                "coral_l4": 0.93,
                "total_coral_points": 9.07,
                "processor_algae": 0.42,
                "processor_algae_points": 1.25,
                "net_algae": 0.14,
                "net_algae_points": 0.56,
                "total_algae_points": 1.8,
                "total_game_pieces": 3.01,
                "barge_points": 1.21,
                "rp_1": 0.1417,
                "rp_2": -0.0566,
                "rp_3": -0.0114
            },
            "stats": {
                "start": 24.65,
                "pre_elim": 15.31,
                "mean": 16.41,
                "max": 24.65
            }
        },
        "record": {
            "qual": {
                "wins": 4,
                "losses": 7,
                "ties": 1,
                "count": 12,
                "winrate": 0.375,
                "rps": 22,
                "rps_per_match": 1.8333,
                "rank": 26,
                "num_teams": 36
            },
            "elim": {
                "wins": 0,
                "losses": 0,
                "ties": 0,
                "count": 0,
                "winrate": 0,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 4,
                "losses": 7,
                "ties": 1,
                "count": 12,
                "winrate": 0.375
            }
        },
        "district_points": 10
    },
    {
        "team": 9443,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "Aluminum Panthers",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 19,
                "sd": 5.66
            },
            "unitless": 1441,
            "norm": 1475,
            "conf": [
                -0.94,
                0.98
            ],
            "breakdown": {
                "total_points": 19,
                "auto_points": 4.64,
                "teleop_points": 10.57,
                "endgame_points": 3.8,
                "auto_rp": 0.0429,
                "coral_rp": -0.0333,
                "barge_rp": 0.0941,
                "tiebreaker_points": 0.08,
                "auto_leave_points": 2.44,
                "auto_coral": 0.32,
                "auto_coral_points": 2.2,
                "teleop_coral": 2.11,
                "teleop_coral_points": 7.6,
                "coral_l1": 0.37,
                "coral_l2": 0.7,
                "coral_l3": 0.52,
                "coral_l4": 0.86,
                "total_coral_points": 9.8,
                "processor_algae": 0.42,
                "processor_algae_points": 1.27,
                "net_algae": 0.42,
                "net_algae_points": 1.7,
                "total_algae_points": 2.97,
                "total_game_pieces": 3.3,
                "barge_points": 3.8,
                "rp_1": 0.0429,
                "rp_2": -0.0333,
                "rp_3": 0.0941
            },
            "stats": {
                "start": 28.12,
                "pre_elim": 18.09,
                "mean": 21.34,
                "max": 29.15
            }
        },
        "record": {
            "qual": {
                "wins": 4,
                "losses": 8,
                "ties": 0,
                "count": 12,
                "winrate": 0.3333,
                "rps": 22,
                "rps_per_match": 1.8333,
                "rank": 27,
                "num_teams": 36
            },
            "elim": {
                "wins": 6,
                "losses": 1,
                "ties": 0,
                "count": 7,
                "winrate": 0.8571428571428571,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 10,
                "losses": 9,
                "ties": 0,
                "count": 19,
                "winrate": 0.5263
            }
        },
        "district_points": 41
    },
    {
        "team": 3623,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "The Robomingos",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 12.79,
                "sd": 4.56
            },
            "unitless": 1399,
            "norm": 1414,
            "conf": [
                -1.04,
                0.93
            ],
            "breakdown": {
                "total_points": 12.79,
                "auto_points": 3.09,
                "teleop_points": 7.69,
                "endgame_points": 2.01,
                "auto_rp": 0.0752,
                "coral_rp": -0.1462,
                "barge_rp": 0.1243,
                "tiebreaker_points": 0.02,
                "auto_leave_points": 2.68,
                "auto_coral": 0.04,
                "auto_coral_points": 0.41,
                "teleop_coral": 2.09,
                "teleop_coral_points": 8.18,
                "coral_l1": 0.48,
                "coral_l2": 0.25,
                "coral_l3": 0.25,
                "coral_l4": 1.16,
                "total_coral_points": 8.58,
                "processor_algae": 0.15,
                "processor_algae_points": 0.45,
                "net_algae": -0.24,
                "net_algae_points": -0.94,
                "total_algae_points": -0.49,
                "total_game_pieces": 2.05,
                "barge_points": 2.01,
                "rp_1": 0.0752,
                "rp_2": -0.1462,
                "rp_3": 0.1243
            },
            "stats": {
                "start": 22.66,
                "pre_elim": 14.61,
                "mean": 15.32,
                "max": 22.66
            }
        },
        "record": {
            "qual": {
                "wins": 4,
                "losses": 7,
                "ties": 1,
                "count": 12,
                "winrate": 0.375,
                "rps": 22,
                "rps_per_match": 1.8333,
                "rank": 28,
                "num_teams": 36
            },
            "elim": {
                "wins": 1,
                "losses": 2,
                "ties": 0,
                "count": 3,
                "winrate": 0.3333333333333333,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 5,
                "losses": 9,
                "ties": 1,
                "count": 15,
                "winrate": 0.3667
            }
        },
        "district_points": 15
    },
    {
        "team": 7314,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "Tornadoes",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 11.48,
                "sd": 3.7
            },
            "unitless": 1390,
            "norm": 1401,
            "conf": [
                -1.12,
                0.92
            ],
            "breakdown": {
                "total_points": 11.48,
                "auto_points": 4.31,
                "teleop_points": 7.6,
                "endgame_points": -0.43,
                "auto_rp": 0.218,
                "coral_rp": -0.1475,
                "barge_rp": -0.0331,
                "tiebreaker_points": -0.05,
                "auto_leave_points": 2.8,
                "auto_coral": 0.32,
                "auto_coral_points": 1.52,
                "teleop_coral": 3.04,
                "teleop_coral_points": 6.71,
                "coral_l1": 2.75,
                "coral_l2": -0.09,
                "coral_l3": 0.27,
                "coral_l4": 0.2,
                "total_coral_points": 8.23,
                "processor_algae": 0.2,
                "processor_algae_points": 0.61,
                "net_algae": 0.07,
                "net_algae_points": 0.28,
                "total_algae_points": 0.89,
                "total_game_pieces": 3.4,
                "barge_points": -0.43,
                "rp_1": 0.218,
                "rp_2": -0.1475,
                "rp_3": -0.0331
            },
            "stats": {
                "start": 14.66,
                "pre_elim": 12.23,
                "mean": 14.8,
                "max": 17.81
            }
        },
        "record": {
            "qual": {
                "wins": 4,
                "losses": 8,
                "ties": 0,
                "count": 12,
                "winrate": 0.3333,
                "rps": 22,
                "rps_per_match": 1.8333,
                "rank": 29,
                "num_teams": 36
            },
            "elim": {
                "wins": 0,
                "losses": 0,
                "ties": 0,
                "count": 0,
                "winrate": 0,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 4,
                "losses": 8,
                "ties": 0,
                "count": 12,
                "winrate": 0.3333
            }
        },
        "district_points": 14
    },
    {
        "team": 5902,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "The Wire Clippers",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 13.33,
                "sd": 5.68
            },
            "unitless": 1403,
            "norm": 1420,
            "conf": [
                -1,
                1.04
            ],
            "breakdown": {
                "total_points": 13.33,
                "auto_points": 4.51,
                "teleop_points": 6.8,
                "endgame_points": 2.02,
                "auto_rp": 0.0438,
                "coral_rp": -0.0469,
                "barge_rp": 0.0083,
                "tiebreaker_points": 0,
                "auto_leave_points": 3.03,
                "auto_coral": 0.15,
                "auto_coral_points": 1.48,
                "teleop_coral": 1.19,
                "teleop_coral_points": 5.82,
                "coral_l1": -0.1,
                "coral_l2": 0.08,
                "coral_l3": 0.18,
                "coral_l4": 1.25,
                "total_coral_points": 7.3,
                "processor_algae": 0.33,
                "processor_algae_points": 1,
                "net_algae": 0,
                "net_algae_points": -0.02,
                "total_algae_points": 0.98,
                "total_game_pieces": 1.74,
                "barge_points": 2.02,
                "rp_1": 0.0438,
                "rp_2": -0.0469,
                "rp_3": 0.0083
            },
            "stats": {
                "start": 20.18,
                "pre_elim": 13.49,
                "mean": 13.41,
                "max": 20.18
            }
        },
        "record": {
            "qual": {
                "wins": 3,
                "losses": 8,
                "ties": 1,
                "count": 12,
                "winrate": 0.2917,
                "rps": 18,
                "rps_per_match": 1.5,
                "rank": 30,
                "num_teams": 36
            },
            "elim": {
                "wins": 0,
                "losses": 0,
                "ties": 0,
                "count": 0,
                "winrate": 0,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 3,
                "losses": 8,
                "ties": 1,
                "count": 12,
                "winrate": 0.2917
            }
        },
        "district_points": 8
    },
    {
        "team": 6690,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "MV roboPride",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 12.28,
                "sd": 4.6
            },
            "unitless": 1396,
            "norm": 1409,
            "conf": [
                -0.89,
                1.07
            ],
            "breakdown": {
                "total_points": 12.28,
                "auto_points": 4.03,
                "teleop_points": 6.7,
                "endgame_points": 1.55,
                "auto_rp": 0.0771,
                "coral_rp": -0.0654,
                "barge_rp": -0.1346,
                "tiebreaker_points": 0.13,
                "auto_leave_points": 3.06,
                "auto_coral": 0.18,
                "auto_coral_points": 0.97,
                "teleop_coral": 1.68,
                "teleop_coral_points": 6.35,
                "coral_l1": 0.46,
                "coral_l2": 0.14,
                "coral_l3": 0.34,
                "coral_l4": 0.77,
                "total_coral_points": 7.32,
                "processor_algae": 0.25,
                "processor_algae_points": 0.75,
                "net_algae": -0.1,
                "net_algae_points": -0.4,
                "total_algae_points": 0.35,
                "total_game_pieces": 1.86,
                "barge_points": 1.55,
                "rp_1": 0.0771,
                "rp_2": -0.0654,
                "rp_3": -0.1346
            },
            "stats": {
                "start": 18.77,
                "pre_elim": 9.66,
                "mean": 13.2,
                "max": 18.77
            }
        },
        "record": {
            "qual": {
                "wins": 4,
                "losses": 8,
                "ties": 0,
                "count": 12,
                "winrate": 0.3333,
                "rps": 18,
                "rps_per_match": 1.5,
                "rank": 31,
                "num_teams": 36
            },
            "elim": {
                "wins": 2,
                "losses": 2,
                "ties": 0,
                "count": 4,
                "winrate": 0.5,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 6,
                "losses": 10,
                "ties": 0,
                "count": 16,
                "winrate": 0.375
            }
        },
        "district_points": 25
    },
    {
        "team": 3566,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "Gone Fishin'",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 13.4,
                "sd": 5.37
            },
            "unitless": 1403,
            "norm": 1420,
            "conf": [
                -1.14,
                0.89
            ],
            "breakdown": {
                "total_points": 13.4,
                "auto_points": 2.85,
                "teleop_points": 9.76,
                "endgame_points": 0.8,
                "auto_rp": 0.0204,
                "coral_rp": -0.141,
                "barge_rp": -0.0251,
                "tiebreaker_points": 0.01,
                "auto_leave_points": 2.73,
                "auto_coral": 0.07,
                "auto_coral_points": 0.11,
                "teleop_coral": 2.13,
                "teleop_coral_points": 9.36,
                "coral_l1": 0.07,
                "coral_l2": 0.43,
                "coral_l3": 0.29,
                "coral_l4": 1.34,
                "total_coral_points": 9.47,
                "processor_algae": 0.14,
                "processor_algae_points": 0.41,
                "net_algae": 0,
                "net_algae_points": -0.01,
                "total_algae_points": 0.4,
                "total_game_pieces": 2.26,
                "barge_points": 0.8,
                "rp_1": 0.0204,
                "rp_2": -0.141,
                "rp_3": -0.0251
            },
            "stats": {
                "start": 20.59,
                "pre_elim": 14.5,
                "mean": 16.65,
                "max": 20.59
            }
        },
        "record": {
            "qual": {
                "wins": 3,
                "losses": 9,
                "ties": 0,
                "count": 12,
                "winrate": 0.25,
                "rps": 16,
                "rps_per_match": 1.3333,
                "rank": 32,
                "num_teams": 36
            },
            "elim": {
                "wins": 0,
                "losses": 0,
                "ties": 0,
                "count": 0,
                "winrate": 0,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 3,
                "losses": 9,
                "ties": 0,
                "count": 12,
                "winrate": 0.25
            }
        },
        "district_points": 12
    },
    {
        "team": 5491,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "Hard Reset",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 3.71,
                "sd": 4.47
            },
            "unitless": 1337,
            "norm": 1322,
            "conf": [
                -1.03,
                1
            ],
            "breakdown": {
                "total_points": 3.71,
                "auto_points": 1.15,
                "teleop_points": 0.89,
                "endgame_points": 1.67,
                "auto_rp": -0.142,
                "coral_rp": -0.1611,
                "barge_rp": 0.0461,
                "tiebreaker_points": 0.05,
                "auto_leave_points": 0.93,
                "auto_coral": 0.1,
                "auto_coral_points": 0.22,
                "teleop_coral": -0.11,
                "teleop_coral_points": 1.24,
                "coral_l1": -0.63,
                "coral_l2": 0.14,
                "coral_l3": -0.12,
                "coral_l4": 0.49,
                "total_coral_points": 1.45,
                "processor_algae": 0.7,
                "processor_algae_points": 2.1,
                "net_algae": -0.61,
                "net_algae_points": -2.44,
                "total_algae_points": -0.34,
                "total_game_pieces": -0.02,
                "barge_points": 1.67,
                "rp_1": -0.142,
                "rp_2": -0.1611,
                "rp_3": 0.0461
            },
            "stats": {
                "start": 14.04,
                "pre_elim": 3.87,
                "mean": 6.58,
                "max": 14.04
            }
        },
        "record": {
            "qual": {
                "wins": 3,
                "losses": 6,
                "ties": 1,
                "count": 10,
                "winrate": 0.35,
                "rps": 16,
                "rps_per_match": 1.6,
                "rank": 33,
                "num_teams": 36
            },
            "elim": {
                "wins": 0,
                "losses": 0,
                "ties": 0,
                "count": 0,
                "winrate": 0,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 3,
                "losses": 6,
                "ties": 1,
                "count": 10,
                "winrate": 0.35
            }
        },
        "district_points": 7
    },
    {
        "team": 9729,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "Knights",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 7.5,
                "sd": 4.44
            },
            "unitless": 1363,
            "norm": 1361,
            "conf": [
                -1.1,
                0.94
            ],
            "breakdown": {
                "total_points": 7.5,
                "auto_points": 0.36,
                "teleop_points": 5.41,
                "endgame_points": 1.73,
                "auto_rp": 0.0026,
                "coral_rp": -0.1512,
                "barge_rp": -0.006,
                "tiebreaker_points": -0.07,
                "auto_leave_points": 2.23,
                "auto_coral": -0.15,
                "auto_coral_points": -1.87,
                "teleop_coral": 1.55,
                "teleop_coral_points": 6.86,
                "coral_l1": 0.24,
                "coral_l2": 0.15,
                "coral_l3": -0.16,
                "coral_l4": 0.95,
                "total_coral_points": 4.99,
                "processor_algae": -0.06,
                "processor_algae_points": -0.19,
                "net_algae": -0.31,
                "net_algae_points": -1.26,
                "total_algae_points": -1.45,
                "total_game_pieces": 0.79,
                "barge_points": 1.73,
                "rp_1": 0.0026,
                "rp_2": -0.1512,
                "rp_3": -0.006
            },
            "stats": {
                "start": 23.73,
                "pre_elim": 6.8,
                "mean": 12.28,
                "max": 23.73
            }
        },
        "record": {
            "qual": {
                "wins": 3,
                "losses": 8,
                "ties": 0,
                "count": 11,
                "winrate": 0.2727,
                "rps": 15,
                "rps_per_match": 1.3636,
                "rank": 34,
                "num_teams": 36
            },
            "elim": {
                "wins": 0,
                "losses": 0,
                "ties": 0,
                "count": 0,
                "winrate": 0,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 3,
                "losses": 8,
                "ties": 0,
                "count": 11,
                "winrate": 0.2727
            }
        },
        "district_points": 6
    },
    {
        "team": 4987,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "MegaRams",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 6.22,
                "sd": 5.69
            },
            "unitless": 1355,
            "norm": 1348,
            "conf": [
                -0.7,
                1.23
            ],
            "breakdown": {
                "total_points": 6.22,
                "auto_points": 4.04,
                "teleop_points": 2.2,
                "endgame_points": -0.02,
                "auto_rp": 0.1123,
                "coral_rp": -0.1443,
                "barge_rp": -0.0807,
                "tiebreaker_points": 0.01,
                "auto_leave_points": 2.51,
                "auto_coral": 0.25,
                "auto_coral_points": 1.53,
                "teleop_coral": 0.82,
                "teleop_coral_points": 3.08,
                "coral_l1": 0.53,
                "coral_l2": -0.25,
                "coral_l3": 0.15,
                "coral_l4": 0.66,
                "total_coral_points": 4.6,
                "processor_algae": -0.2,
                "processor_algae_points": -0.59,
                "net_algae": -0.07,
                "net_algae_points": -0.29,
                "total_algae_points": -0.88,
                "total_game_pieces": 0.83,
                "barge_points": -0.02,
                "rp_1": 0.1123,
                "rp_2": -0.1443,
                "rp_3": -0.0807
            },
            "stats": {
                "start": 14.83,
                "pre_elim": 3.58,
                "mean": 8.08,
                "max": 14.83
            }
        },
        "record": {
            "qual": {
                "wins": 2,
                "losses": 10,
                "ties": 0,
                "count": 12,
                "winrate": 0.1667,
                "rps": 15,
                "rps_per_match": 1.25,
                "rank": 35,
                "num_teams": 36
            },
            "elim": {
                "wins": 0,
                "losses": 0,
                "ties": 0,
                "count": 0,
                "winrate": 0,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 2,
                "losses": 10,
                "ties": 0,
                "count": 12,
                "winrate": 0.1667
            }
        },
        "district_points": 5
    },
    {
        "team": 1761,
        "year": 2025,
        "event": "2025nhsal",
        "time": 1740700800,
        "team_name": "STEAMpunk Tigers",
        "event_name": "NE District Granite State Event",
        "country": "USA",
        "state": "NH",
        "district": "ne",
        "type": "district",
        "week": 1,
        "status": "Completed",
        "first_event": true,
        "epa": {
            "total_points": {
                "mean": 2.4,
                "sd": 4.59
            },
            "unitless": 1329,
            "norm": 1309,
            "conf": [
                -1.03,
                1.01
            ],
            "breakdown": {
                "total_points": 2.4,
                "auto_points": 1.38,
                "teleop_points": -0.04,
                "endgame_points": 1.06,
                "auto_rp": 0.0065,
                "coral_rp": -0.1505,
                "barge_rp": -0.1048,
                "tiebreaker_points": -0.05,
                "auto_leave_points": 1.98,
                "auto_coral": -0.13,
                "auto_coral_points": -0.61,
                "teleop_coral": 0.06,
                "teleop_coral_points": 2.37,
                "coral_l1": -0.27,
                "coral_l2": -0.37,
                "coral_l3": -0.57,
                "coral_l4": 1.2,
                "total_coral_points": 1.76,
                "processor_algae": -0.31,
                "processor_algae_points": -0.92,
                "net_algae": -0.37,
                "net_algae_points": -1.49,
                "total_algae_points": -2.41,
                "total_game_pieces": -0.69,
                "barge_points": 1.06,
                "rp_1": 0.0065,
                "rp_2": -0.1505,
                "rp_3": -0.1048
            },
            "stats": {
                "start": 13.96,
                "pre_elim": 3.39,
                "mean": 4.94,
                "max": 13.96
            }
        },
        "record": {
            "qual": {
                "wins": 3,
                "losses": 9,
                "ties": 0,
                "count": 12,
                "winrate": 0.25,
                "rps": 15,
                "rps_per_match": 1.25,
                "rank": 36,
                "num_teams": 36
            },
            "elim": {
                "wins": 0,
                "losses": 0,
                "ties": 0,
                "count": 0,
                "winrate": 0,
                "alliance": null,
                "is_captain": null
            },
            "total": {
                "wins": 3,
                "losses": 9,
                "ties": 0,
                "count": 12,
                "winrate": 0.25
            }
        },
        "district_points": 4
    }
];

const nexusStatus = {
    "eventKey": "2025nhsal",
    "dataAsOfTime": 1741571429097,
    "nowQueuing": "Qualification 12",
    "matches": [
        {
            "label": "Practice 1",
            "status": "On field",
            "redTeams": [
                "5902",
                "811",
                "2342"
            ],
            "blueTeams": [
                "1768",
                "6328",
                "3623"
            ],
            "times": {
                "scheduledStartTime": 1740838500000,
                "estimatedQueueTime": 1740837416018,
                "estimatedOnDeckTime": 1740838211521,
                "estimatedOnFieldTime": 1740838836806,
                "estimatedStartTime": 1740839256806,
                "actualQueueTime": 1740837416018,
                "actualOnDeckTime": 1740838211521,
                "actualOnFieldTime": 1740838836806
            }
        },
        {
            "label": "Practice 2",
            "status": "On field",
            "redTeams": [
                "8410",
                "6620",
                "9729"
            ],
            "blueTeams": [
                "4925",
                "663",
                "6690"
            ],
            "times": {
                "scheduledStartTime": 1740839100000,
                "estimatedQueueTime": 1740838236546,
                "estimatedOnDeckTime": 1740838836816,
                "estimatedOnFieldTime": 1740839398809,
                "estimatedStartTime": 1740839818809,
                "actualQueueTime": 1740838236546,
                "actualOnDeckTime": 1740838836816,
                "actualOnFieldTime": 1740839398809
            }
        },
        {
            "label": "Practice 3",
            "status": "On field",
            "redTeams": [
                "138",
                "6201",
                "3467"
            ],
            "blueTeams": [
                "501",
                "1277",
                "97"
            ],
            "times": {
                "scheduledStartTime": 1740839700000,
                "estimatedQueueTime": 1740838837545,
                "estimatedOnDeckTime": 1740839398822,
                "estimatedOnFieldTime": 1740840195843,
                "estimatedStartTime": 1740840615843,
                "actualQueueTime": 1740838837545,
                "actualOnDeckTime": 1740839398822,
                "actualOnFieldTime": 1740840195843
            }
        },
        {
            "label": "Practice 4",
            "status": "On field",
            "redTeams": [
                "8013",
                "1058",
                "2877"
            ],
            "blueTeams": [
                "8708",
                "319",
                "10156"
            ],
            "times": {
                "scheduledStartTime": 1740840300000,
                "estimatedQueueTime": 1740839399540,
                "estimatedOnDeckTime": 1740840195851,
                "estimatedOnFieldTime": 1740840956766,
                "estimatedStartTime": 1740841376766,
                "actualQueueTime": 1740839399540,
                "actualOnDeckTime": 1740840195851,
                "actualOnFieldTime": 1740840956766
            }
        },
        {
            "label": "Practice 5",
            "status": "On field",
            "redTeams": [
                "9443",
                "6328",
                "3467"
            ],
            "blueTeams": [
                "4909",
                "9644",
                "1768"
            ],
            "times": {
                "scheduledStartTime": 1740840900000,
                "estimatedQueueTime": 1740840196306,
                "estimatedOnDeckTime": 1740840956776,
                "estimatedOnFieldTime": 1740842047409,
                "estimatedStartTime": 1740842467409,
                "actualQueueTime": 1740840196306,
                "actualOnDeckTime": 1740840956776,
                "actualOnFieldTime": 1740842047409
            }
        },
        {
            "label": "Practice 6",
            "status": "On field",
            "redTeams": [
                "1721",
                "6328",
                "4909"
            ],
            "blueTeams": [
                "3467",
                "7314",
                "5962"
            ],
            "times": {
                "scheduledStartTime": 1740841500000,
                "estimatedQueueTime": 1740840957060,
                "estimatedOnDeckTime": 1740842047427,
                "estimatedOnFieldTime": 1740842598148,
                "estimatedStartTime": 1740843018148,
                "actualQueueTime": 1740840957060,
                "actualOnDeckTime": 1740842047427,
                "actualOnFieldTime": 1740842598148
            }
        },
        {
            "label": "Qualification 1",
            "status": "On field",
            "redTeams": [
                "663",
                "6620",
                "319"
            ],
            "blueTeams": [
                "10156",
                "1761",
                "5491"
            ],
            "times": {
                "scheduledStartTime": 1740844800000,
                "estimatedQueueTime": 1740843379762,
                "estimatedOnDeckTime": 1740843511999,
                "estimatedOnFieldTime": 1740845866781,
                "estimatedStartTime": 1740846171781,
                "actualQueueTime": 1740843379762,
                "actualOnDeckTime": 1740843511999,
                "actualOnFieldTime": 1740845866781
            }
        },
        {
            "label": "Qualification 2",
            "status": "On field",
            "redTeams": [
                "811",
                "138",
                "9729"
            ],
            "blueTeams": [
                "4925",
                "3566",
                "5902"
            ],
            "times": {
                "scheduledStartTime": 1740845340000,
                "estimatedQueueTime": 1740843516090,
                "estimatedOnDeckTime": 1740845866790,
                "estimatedOnFieldTime": 1740846242311,
                "estimatedStartTime": 1740846547311,
                "actualQueueTime": 1740843516090,
                "actualOnDeckTime": 1740845866790,
                "actualOnFieldTime": 1740846242311
            }
        },
        {
            "label": "Qualification 3",
            "status": "On field",
            "redTeams": [
                "4987",
                "2877",
                "9443"
            ],
            "blueTeams": [
                "3467",
                "97",
                "1512"
            ],
            "times": {
                "scheduledStartTime": 1740845880000,
                "estimatedQueueTime": 1740845867244,
                "estimatedOnDeckTime": 1740846242320,
                "estimatedOnFieldTime": 1740846905295,
                "estimatedStartTime": 1740847210295,
                "actualQueueTime": 1740845867244,
                "actualOnDeckTime": 1740846242320,
                "actualOnFieldTime": 1740846905295
            }
        },
        {
            "label": "Qualification 4",
            "status": "On field",
            "redTeams": [
                "1277",
                "3623",
                "8410"
            ],
            "blueTeams": [
                "9644",
                "8013",
                "6201"
            ],
            "times": {
                "scheduledStartTime": 1740846420000,
                "estimatedQueueTime": 1740846243211,
                "estimatedOnDeckTime": 1740846905304,
                "estimatedOnFieldTime": 1740847507644,
                "estimatedStartTime": 1740847812644,
                "actualQueueTime": 1740846243211,
                "actualOnDeckTime": 1740846905304,
                "actualOnFieldTime": 1740847507644
            }
        },
        {
            "label": "Qualification 5",
            "status": "On field",
            "redTeams": [
                "2342",
                "1768",
                "6690"
            ],
            "blueTeams": [
                "1247",
                "501",
                "6328"
            ],
            "times": {
                "scheduledStartTime": 1740846960000,
                "estimatedQueueTime": 1740846906022,
                "estimatedOnDeckTime": 1740847507653,
                "estimatedOnFieldTime": 1740848391323,
                "estimatedStartTime": 1740848696323,
                "actualQueueTime": 1740846906022,
                "actualOnDeckTime": 1740847507653,
                "actualOnFieldTime": 1740848391323
            }
        },
        {
            "label": "Qualification 6",
            "status": "On field",
            "redTeams": [
                "1058",
                "7314",
                "4909"
            ],
            "blueTeams": [
                "8708",
                "1721",
                "5962"
            ],
            "times": {
                "scheduledStartTime": 1740847500000,
                "estimatedQueueTime": 1740847508521,
                "estimatedOnDeckTime": 1740848391333,
                "estimatedOnFieldTime": 1740849450454,
                "estimatedStartTime": 1740849755454,
                "actualQueueTime": 1740847508521,
                "actualOnDeckTime": 1740848391333,
                "actualOnFieldTime": 1740849450454
            }
        },
        {
            "label": "Qualification 7",
            "status": "On field",
            "redTeams": [
                "10156",
                "2877",
                "138"
            ],
            "blueTeams": [
                "4987",
                "3467",
                "3566"
            ],
            "times": {
                "scheduledStartTime": 1740848040000,
                "estimatedQueueTime": 1740848391738,
                "estimatedOnDeckTime": 1740849450463,
                "estimatedOnFieldTime": 1740849608799,
                "estimatedStartTime": 1740849913799,
                "actualQueueTime": 1740848391738,
                "actualOnDeckTime": 1740849450463,
                "actualOnFieldTime": 1740849608799
            }
        },
        {
            "label": "Qualification 8",
            "status": "On field",
            "redTeams": [
                "8013",
                "1512",
                "811"
            ],
            "blueTeams": [
                "5491",
                "9644",
                "1277"
            ],
            "times": {
                "scheduledStartTime": 1740848520000,
                "estimatedQueueTime": 1740849450870,
                "estimatedOnDeckTime": 1740849608807,
                "estimatedOnFieldTime": 1740849912685,
                "estimatedStartTime": 1740850217685,
                "actualQueueTime": 1740849450870,
                "actualOnDeckTime": 1740849608807,
                "actualOnFieldTime": 1740849912685
            }
        },
        {
            "label": "Qualification 9",
            "status": "On field",
            "redTeams": [
                "5902",
                "319",
                "9443"
            ],
            "blueTeams": [
                "2342",
                "6201",
                "1247"
            ],
            "times": {
                "scheduledStartTime": 1740849000000,
                "estimatedQueueTime": 1740849609261,
                "estimatedOnDeckTime": 1740849912693,
                "estimatedOnFieldTime": 1740850800422,
                "estimatedStartTime": 1740851105422,
                "actualQueueTime": 1740849609261,
                "actualOnDeckTime": 1740849912693,
                "actualOnFieldTime": 1740850800422
            }
        },
        {
            "label": "Qualification 10",
            "status": "On field",
            "redTeams": [
                "8410",
                "1058",
                "5962"
            ],
            "blueTeams": [
                "9729",
                "663",
                "1721"
            ],
            "times": {
                "scheduledStartTime": 1740849480000,
                "estimatedQueueTime": 1740849913435,
                "estimatedOnDeckTime": 1740850806255,
                "estimatedOnFieldTime": 1740851124213,
                "estimatedStartTime": 1740851429213,
                "actualQueueTime": 1740849913435,
                "actualOnDeckTime": 1740850806255,
                "actualOnFieldTime": 1740851124213
            },
            "breakAfter": "Lunch"
        },
        {
            "label": "Qualification 11",
            "status": "On field",
            "redTeams": [
                "4925",
                "6620",
                "1761"
            ],
            "blueTeams": [
                "501",
                "97",
                "8708"
            ],
            "times": {
                "scheduledStartTime": 1740849960000,
                "estimatedQueueTime": 1740852977475,
                "estimatedOnDeckTime": 1740852977475,
                "estimatedOnFieldTime": 1740853392382,
                "estimatedStartTime": 1740853697382,
                "actualQueueTime": 1740852977475,
                "actualOnDeckTime": 1740852977475,
                "actualOnFieldTime": 1740853392382
            }
        },
        {
            "label": "Qualification 12",
            "status": "Now queuing",
            "redTeams": [
                "6690",
                "3623",
                "7314"
            ],
            "blueTeams": [
                "4909",
                "6328",
                "1768"
            ],
            "times": {
                "scheduledStartTime": 1740850440000,
                "estimatedQueueTime": 1740852978285,
                "estimatedOnDeckTime": 1740853392393,
                "estimatedOnFieldTime": 1740854187992,
                "estimatedStartTime": 1740854492992,
                "actualQueueTime": 1740852978285,
                "actualOnDeckTime": 1740853392393,
                "actualOnFieldTime": 1740854187992
            }
        },
        {
            "label": "Qualification 13",
            "status": "On deck",
            "redTeams": [
                "811",
                "1247",
                "2877"
            ],
            "blueTeams": [
                "3467",
                "319",
                "2342"
            ],
            "times": {
                "scheduledStartTime": 1740850920000,
                "estimatedQueueTime": 1740853392871,
                "estimatedOnDeckTime": 1740854188001,
                "estimatedOnFieldTime": 1740854723444,
                "estimatedStartTime": 1740855028444,
                "actualQueueTime": 1740853392871,
                "actualOnDeckTime": 1740854188001,
                "actualOnFieldTime": 1740854723444
            }
        },
        {
            "label": "Qualification 14",
            "status": "Queuing soon",
            "redTeams": [
                "9443",
                "663",
                "8013"
            ],
            "blueTeams": [
                "5962",
                "10156",
                "1512"
            ],
            "times": {
                "scheduledStartTime": 1740851400000,
                "estimatedQueueTime": 1740854188401,
                "estimatedOnDeckTime": 1740854723454,
                "estimatedOnFieldTime": 1740855165431,
                "estimatedStartTime": 1740855470431,
                "actualQueueTime": 1740854188401,
                "actualOnDeckTime": 1740854723454,
                "actualOnFieldTime": 1740855165431
            }
        },
        {
            "label": "Qualification 15",
            "status": "Queuing soon",
            "redTeams": [
                "97",
                "5902",
                "1721"
            ],
            "blueTeams": [
                "501",
                "6620",
                "1277"
            ],
            "times": {
                "scheduledStartTime": 1740853680000,
                "estimatedQueueTime": 1740854723827,
                "estimatedOnDeckTime": 1740855165443,
                "estimatedOnFieldTime": 1740855830093,
                "estimatedStartTime": 1740856135093,
                "actualQueueTime": 1740854723827,
                "actualOnDeckTime": 1740855165443,
                "actualOnFieldTime": 1740855830093
            }
        },
        {
            "label": "Qualification 16",
            "status": "Queuing soon",
            "redTeams": [
                "1761",
                "1058",
                "9729"
            ],
            "blueTeams": [
                "138",
                "1768",
                "3623"
            ],
            "times": {
                "scheduledStartTime": 1740854160000,
                "estimatedQueueTime": 1740855166165,
                "estimatedOnDeckTime": 1740855830107,
                "estimatedOnFieldTime": 1740856228748,
                "estimatedStartTime": 1740856533748,
                "actualQueueTime": 1740855166165,
                "actualOnDeckTime": 1740855830107,
                "actualOnFieldTime": 1740856228748
            }
        },
        {
            "label": "Qualification 17",
            "status": "Queuing soon",
            "redTeams": [
                "6201",
                "8708",
                "7314"
            ],
            "blueTeams": [
                "6690",
                "9644",
                "3566"
            ],
            "times": {
                "scheduledStartTime": 1740854640000,
                "estimatedQueueTime": 1740855830768,
                "estimatedOnDeckTime": 1740856228767,
                "estimatedOnFieldTime": 1740856786997,
                "estimatedStartTime": 1740857091997,
                "actualQueueTime": 1740855830768,
                "actualOnDeckTime": 1740856228767,
                "actualOnFieldTime": 1740856786997
            }
        },
        {
            "label": "Qualification 18",
            "status": "Queuing soon",
            "redTeams": [
                "6328",
                "5491",
                "4925"
            ],
            "blueTeams": [
                "8410",
                "4909",
                "4987"
            ],
            "times": {
                "scheduledStartTime": 1740855120000,
                "estimatedQueueTime": 1740856229342,
                "estimatedOnDeckTime": 1740856787009,
                "estimatedOnFieldTime": 1740857253059,
                "estimatedStartTime": 1740857558059,
                "actualQueueTime": 1740856229342,
                "actualOnDeckTime": 1740856787009,
                "actualOnFieldTime": 1740857253059
            }
        },
        {
            "label": "Qualification 19",
            "status": "Queuing soon",
            "redTeams": [
                "501",
                "5962",
                "2342"
            ],
            "blueTeams": [
                "319",
                "10156",
                "811"
            ],
            "times": {
                "scheduledStartTime": 1740855600000,
                "estimatedQueueTime": 1740856787877,
                "estimatedOnDeckTime": 1740857253074,
                "estimatedOnFieldTime": 1740858043057,
                "estimatedStartTime": 1740858348057,
                "actualQueueTime": 1740856787877,
                "actualOnDeckTime": 1740857253074,
                "actualOnFieldTime": 1740858043057
            }
        },
        {
            "label": "Qualification 20",
            "status": "Queuing soon",
            "redTeams": [
                "3623",
                "8013",
                "6620"
            ],
            "blueTeams": [
                "9443",
                "3467",
                "1058"
            ],
            "times": {
                "scheduledStartTime": 1740856080000,
                "estimatedQueueTime": 1740857253500,
                "estimatedOnDeckTime": 1740858043069,
                "estimatedOnFieldTime": 1740858754836,
                "estimatedStartTime": 1740859059836,
                "actualQueueTime": 1740857253500,
                "actualOnDeckTime": 1740858043069,
                "actualOnFieldTime": 1740858754836
            }
        },
        {
            "label": "Qualification 21",
            "status": "Queuing soon",
            "redTeams": [
                "1768",
                "7314",
                "3566"
            ],
            "blueTeams": [
                "97",
                "1277",
                "138"
            ],
            "times": {
                "scheduledStartTime": 1740856560000,
                "estimatedQueueTime": 1740858043441,
                "estimatedOnDeckTime": 1740858754850,
                "estimatedOnFieldTime": 1740859396907,
                "estimatedStartTime": 1740859701907,
                "actualQueueTime": 1740858043441,
                "actualOnDeckTime": 1740858754850,
                "actualOnFieldTime": 1740859396907
            }
        },
        {
            "label": "Qualification 22",
            "status": "Queuing soon",
            "redTeams": [
                "9729",
                "6328",
                "6201"
            ],
            "blueTeams": [
                "2877",
                "4909",
                "5491"
            ],
            "times": {
                "scheduledStartTime": 1740857040000,
                "estimatedQueueTime": 1740858755316,
                "estimatedOnDeckTime": 1740859396918,
                "estimatedOnFieldTime": 1740859815238,
                "estimatedStartTime": 1740860120238,
                "actualQueueTime": 1740858755316,
                "actualOnDeckTime": 1740859396918,
                "actualOnFieldTime": 1740859815238
            }
        },
        {
            "label": "Qualification 23",
            "status": "Queuing soon",
            "redTeams": [
                "9644",
                "1512",
                "1247"
            ],
            "blueTeams": [
                "5902",
                "8708",
                "1761"
            ],
            "times": {
                "scheduledStartTime": 1740857520000,
                "estimatedQueueTime": 1740859397502,
                "estimatedOnDeckTime": 1740859815249,
                "estimatedOnFieldTime": 1740860404604,
                "estimatedStartTime": 1740860709604,
                "actualQueueTime": 1740859397502,
                "actualOnDeckTime": 1740859815249,
                "actualOnFieldTime": 1740860404604
            }
        },
        {
            "label": "Qualification 24",
            "status": "Queuing soon",
            "redTeams": [
                "4987",
                "1721",
                "4925"
            ],
            "blueTeams": [
                "663",
                "8410",
                "6690"
            ],
            "times": {
                "scheduledStartTime": 1740858000000,
                "estimatedQueueTime": 1740859815930,
                "estimatedOnDeckTime": 1740860404616,
                "estimatedOnFieldTime": 1740860974145,
                "estimatedStartTime": 1740861279145,
                "actualQueueTime": 1740859815930,
                "actualOnDeckTime": 1740860404616,
                "actualOnFieldTime": 1740860974145
            }
        },
        {
            "label": "Qualification 25",
            "status": "Queuing soon",
            "redTeams": [
                "6620",
                "10156",
                "2342"
            ],
            "blueTeams": [
                "7314",
                "811",
                "97"
            ],
            "times": {
                "scheduledStartTime": 1740858480000,
                "estimatedQueueTime": 1740860405055,
                "estimatedOnDeckTime": 1740860974157,
                "estimatedOnFieldTime": 1740861249735,
                "estimatedStartTime": 1740861554735,
                "actualQueueTime": 1740860405055,
                "actualOnDeckTime": 1740860974157,
                "actualOnFieldTime": 1740861249735
            }
        },
        {
            "label": "Qualification 26",
            "status": "Queuing soon",
            "redTeams": [
                "6201",
                "1058",
                "501"
            ],
            "blueTeams": [
                "3623",
                "9729",
                "5491"
            ],
            "times": {
                "scheduledStartTime": 1740858960000,
                "estimatedQueueTime": 1740860974534,
                "estimatedOnDeckTime": 1740861249746,
                "estimatedOnFieldTime": 1740861984344,
                "estimatedStartTime": 1740862289344,
                "actualQueueTime": 1740860974534,
                "actualOnDeckTime": 1740861249746,
                "actualOnFieldTime": 1740861984344
            }
        },
        {
            "label": "Qualification 27",
            "status": "Queuing soon",
            "redTeams": [
                "1512",
                "4909",
                "3566"
            ],
            "blueTeams": [
                "5902",
                "3467",
                "9644"
            ],
            "times": {
                "scheduledStartTime": 1740859440000,
                "estimatedQueueTime": 1740861250576,
                "estimatedOnDeckTime": 1740861984355,
                "estimatedOnFieldTime": 1740862181828,
                "estimatedStartTime": 1740862486828,
                "actualQueueTime": 1740861250576,
                "actualOnDeckTime": 1740861984355,
                "actualOnFieldTime": 1740862181828
            }
        },
        {
            "label": "Qualification 28",
            "status": "Queuing soon",
            "redTeams": [
                "663",
                "8708",
                "2877"
            ],
            "blueTeams": [
                "6328",
                "9443",
                "138"
            ],
            "times": {
                "scheduledStartTime": 1740859920000,
                "estimatedQueueTime": 1740861985131,
                "estimatedOnDeckTime": 1740862181840,
                "estimatedOnFieldTime": 1740862891992,
                "estimatedStartTime": 1740863196992,
                "actualQueueTime": 1740861985131,
                "actualOnDeckTime": 1740862181840,
                "actualOnFieldTime": 1740862891992
            }
        },
        {
            "label": "Qualification 29",
            "status": "Queuing soon",
            "redTeams": [
                "319",
                "1721",
                "8013"
            ],
            "blueTeams": [
                "1768",
                "1761",
                "8410"
            ],
            "times": {
                "scheduledStartTime": 1740860400000,
                "estimatedQueueTime": 1740862182399,
                "estimatedOnDeckTime": 1740862892007,
                "estimatedOnFieldTime": 1740863227114,
                "estimatedStartTime": 1740863532114,
                "actualQueueTime": 1740862182399,
                "actualOnDeckTime": 1740862892007,
                "actualOnFieldTime": 1740863227114
            }
        },
        {
            "label": "Qualification 30",
            "status": "Queuing soon",
            "redTeams": [
                "1277",
                "4987",
                "5962"
            ],
            "blueTeams": [
                "6690",
                "4925",
                "1247"
            ],
            "times": {
                "scheduledStartTime": 1740860880000,
                "estimatedQueueTime": 1740862892398,
                "estimatedOnDeckTime": 1740863227129,
                "estimatedOnFieldTime": 1740863658107,
                "estimatedStartTime": 1740863963107,
                "actualQueueTime": 1740862892398,
                "actualOnDeckTime": 1740863227129,
                "actualOnFieldTime": 1740863658107
            }
        },
        {
            "label": "Qualification 31",
            "status": "Queuing soon",
            "redTeams": [
                "97",
                "2342",
                "9644"
            ],
            "blueTeams": [
                "1512",
                "9729",
                "5902"
            ],
            "times": {
                "scheduledStartTime": 1740861360000,
                "estimatedQueueTime": 1740863227850,
                "estimatedOnDeckTime": 1740863658117,
                "estimatedOnFieldTime": 1740864169781,
                "estimatedStartTime": 1740864474781,
                "actualQueueTime": 1740863227850,
                "actualOnDeckTime": 1740863658117,
                "actualOnFieldTime": 1740864169781
            }
        },
        {
            "label": "Qualification 32",
            "status": "Queuing soon",
            "redTeams": [
                "6328",
                "3467",
                "8708"
            ],
            "blueTeams": [
                "1058",
                "811",
                "3623"
            ],
            "times": {
                "scheduledStartTime": 1740861840000,
                "estimatedQueueTime": 1740863659008,
                "estimatedOnDeckTime": 1740864169792,
                "estimatedOnFieldTime": 1740864779767,
                "estimatedStartTime": 1740865084767,
                "actualQueueTime": 1740863659008,
                "actualOnDeckTime": 1740864169792,
                "actualOnFieldTime": 1740864779767
            }
        },
        {
            "label": "Qualification 33",
            "status": "Queuing soon",
            "redTeams": [
                "138",
                "1721",
                "8410"
            ],
            "blueTeams": [
                "501",
                "9443",
                "7314"
            ],
            "times": {
                "scheduledStartTime": 1740862320000,
                "estimatedQueueTime": 1740864170181,
                "estimatedOnDeckTime": 1740864779797,
                "estimatedOnFieldTime": 1740865364293,
                "estimatedStartTime": 1740865669293,
                "actualQueueTime": 1740864170181,
                "actualOnDeckTime": 1740864779797,
                "actualOnFieldTime": 1740865364293
            }
        },
        {
            "label": "Qualification 34",
            "status": "Queuing soon",
            "redTeams": [
                "4909",
                "319",
                "4925"
            ],
            "blueTeams": [
                "10156",
                "1277",
                "6690"
            ],
            "times": {
                "scheduledStartTime": 1740862800000,
                "estimatedQueueTime": 1740864780734,
                "estimatedOnDeckTime": 1740865364304,
                "estimatedOnFieldTime": 1740865772409,
                "estimatedStartTime": 1740866077409,
                "actualQueueTime": 1740864780734,
                "actualOnDeckTime": 1740865364304,
                "actualOnFieldTime": 1740865772409
            }
        },
        {
            "label": "Qualification 35",
            "status": "Queuing soon",
            "redTeams": [
                "5491",
                "3566",
                "6201"
            ],
            "blueTeams": [
                "5962",
                "1768",
                "6620"
            ],
            "times": {
                "scheduledStartTime": 1740863280000,
                "estimatedQueueTime": 1740865365037,
                "estimatedOnDeckTime": 1740865772420,
                "estimatedOnFieldTime": 1740866089548,
                "estimatedStartTime": 1740866394548,
                "actualQueueTime": 1740865365037,
                "actualOnDeckTime": 1740865772420,
                "actualOnFieldTime": 1740866089548
            }
        },
        {
            "label": "Qualification 36",
            "status": "Queuing soon",
            "redTeams": [
                "1247",
                "663",
                "4987"
            ],
            "blueTeams": [
                "2877",
                "8013",
                "1761"
            ],
            "times": {
                "scheduledStartTime": 1740863760000,
                "estimatedQueueTime": 1740865773184,
                "estimatedOnDeckTime": 1740866089558,
                "estimatedOnFieldTime": 1740866785714,
                "estimatedStartTime": 1740867090714,
                "actualQueueTime": 1740865773184,
                "actualOnDeckTime": 1740866089558,
                "actualOnFieldTime": 1740866785714
            }
        },
        {
            "label": "Qualification 37",
            "status": "Queuing soon",
            "redTeams": [
                "9729",
                "97",
                "9443"
            ],
            "blueTeams": [
                "1721",
                "9644",
                "6328"
            ],
            "times": {
                "scheduledStartTime": 1740864240000,
                "estimatedQueueTime": 1740866090979,
                "estimatedOnDeckTime": 1740866785725,
                "estimatedOnFieldTime": 1740867386166,
                "estimatedStartTime": 1740867691166,
                "actualQueueTime": 1740866090979,
                "actualOnDeckTime": 1740866785725,
                "actualOnFieldTime": 1740867386166
            }
        },
        {
            "label": "Qualification 38",
            "status": "Queuing soon",
            "redTeams": [
                "8410",
                "5902",
                "2342"
            ],
            "blueTeams": [
                "8708",
                "10156",
                "1058"
            ],
            "times": {
                "scheduledStartTime": 1740864720000,
                "estimatedQueueTime": 1740866786319,
                "estimatedOnDeckTime": 1740867386178,
                "estimatedOnFieldTime": 1740868072555,
                "estimatedStartTime": 1740868377555,
                "actualQueueTime": 1740866786319,
                "actualOnDeckTime": 1740867386178,
                "actualOnFieldTime": 1740868072555
            }
        },
        {
            "label": "Qualification 39",
            "status": "Queuing soon",
            "redTeams": [
                "4925",
                "501",
                "3467"
            ],
            "blueTeams": [
                "5491",
                "319",
                "1768"
            ],
            "times": {
                "scheduledStartTime": 1740865200000,
                "estimatedQueueTime": 1740867386721,
                "estimatedOnDeckTime": 1740868072569,
                "estimatedOnFieldTime": 1740868572780,
                "estimatedStartTime": 1740868877780,
                "actualQueueTime": 1740867386721,
                "actualOnDeckTime": 1740868072569,
                "actualOnFieldTime": 1740868572780
            }
        },
        {
            "label": "Qualification 40",
            "status": "Queuing soon",
            "redTeams": [
                "4987",
                "6201",
                "3623"
            ],
            "blueTeams": [
                "7314",
                "2877",
                "1277"
            ],
            "times": {
                "scheduledStartTime": 1740865680000,
                "estimatedQueueTime": 1740868073248,
                "estimatedOnDeckTime": 1740868572790,
                "estimatedOnFieldTime": 1740869149431,
                "estimatedStartTime": 1740869454431,
                "actualQueueTime": 1740868073248,
                "actualOnDeckTime": 1740868572790,
                "actualOnFieldTime": 1740869149431
            }
        },
        {
            "label": "Qualification 41",
            "status": "Queuing soon",
            "redTeams": [
                "138",
                "6620",
                "1512"
            ],
            "blueTeams": [
                "8013",
                "1247",
                "4909"
            ],
            "times": {
                "scheduledStartTime": 1740866160000,
                "estimatedQueueTime": 1740868573693,
                "estimatedOnDeckTime": 1740869149443,
                "estimatedOnFieldTime": 1740869592980,
                "estimatedStartTime": 1740869897980,
                "actualQueueTime": 1740868573693,
                "actualOnDeckTime": 1740869149443,
                "actualOnFieldTime": 1740869592980
            }
        },
        {
            "label": "Qualification 42",
            "status": "Queuing soon",
            "redTeams": [
                "3566",
                "1761",
                "663"
            ],
            "blueTeams": [
                "5962",
                "6690",
                "811"
            ],
            "times": {
                "scheduledStartTime": 1740866640000,
                "estimatedQueueTime": 1740869150335,
                "estimatedOnDeckTime": 1740869592990,
                "estimatedOnFieldTime": 1740870108417,
                "estimatedStartTime": 1740870413417,
                "actualQueueTime": 1740869150335,
                "actualOnDeckTime": 1740869592990,
                "actualOnFieldTime": 1740870108417
            }
        },
        {
            "label": "Qualification 43",
            "status": "Queuing soon",
            "redTeams": [
                "9443",
                "8410",
                "10156"
            ],
            "blueTeams": [
                "1058",
                "2342",
                "5491"
            ],
            "times": {
                "scheduledStartTime": 1740867120000,
                "estimatedQueueTime": 1740869593202,
                "estimatedOnDeckTime": 1740870108428,
                "estimatedOnFieldTime": 1740870542123,
                "estimatedStartTime": 1740870847123,
                "actualQueueTime": 1740869593202,
                "actualOnDeckTime": 1740870108428,
                "actualOnFieldTime": 1740870542123
            }
        },
        {
            "label": "Qualification 44",
            "status": "Queuing soon",
            "redTeams": [
                "2877",
                "4925",
                "9644"
            ],
            "blueTeams": [
                "3623",
                "501",
                "1721"
            ],
            "times": {
                "scheduledStartTime": 1740867600000,
                "estimatedQueueTime": 1740870109117,
                "estimatedOnDeckTime": 1740870542133,
                "estimatedOnFieldTime": 1740871030682,
                "estimatedStartTime": 1740871335682,
                "actualQueueTime": 1740870109117,
                "actualOnDeckTime": 1740870542133,
                "actualOnFieldTime": 1740871030682
            }
        },
        {
            "label": "Qualification 45",
            "status": "Queuing soon",
            "redTeams": [
                "7314",
                "1247",
                "5902"
            ],
            "blueTeams": [
                "1768",
                "9729",
                "8013"
            ],
            "times": {
                "scheduledStartTime": 1740868080000,
                "estimatedQueueTime": 1740870543695,
                "estimatedOnDeckTime": 1740871030690,
                "estimatedOnFieldTime": 1740871456368,
                "estimatedStartTime": 1740871761368,
                "actualQueueTime": 1740870543695,
                "actualOnDeckTime": 1740871030690,
                "actualOnFieldTime": 1740871456368
            }
        },
        {
            "label": "Qualification 46",
            "status": "Queuing soon",
            "redTeams": [
                "1277",
                "1761",
                "3467"
            ],
            "blueTeams": [
                "3566",
                "5962",
                "6328"
            ],
            "times": {
                "scheduledStartTime": 1740868560000,
                "estimatedQueueTime": 1740871031301,
                "estimatedOnDeckTime": 1740871456382,
                "estimatedOnFieldTime": 1740871909550,
                "estimatedStartTime": 1740872214550,
                "actualQueueTime": 1740871031301,
                "actualOnDeckTime": 1740871456382,
                "actualOnFieldTime": 1740871909550
            }
        },
        {
            "label": "Qualification 47",
            "status": "Queuing soon",
            "redTeams": [
                "6690",
                "4987",
                "1512"
            ],
            "blueTeams": [
                "811",
                "6201",
                "6620"
            ],
            "times": {
                "scheduledStartTime": 1740869040000,
                "estimatedQueueTime": 1740871456702,
                "estimatedOnDeckTime": 1740871909559,
                "estimatedOnFieldTime": 1740872446590,
                "estimatedStartTime": 1740872751590,
                "actualQueueTime": 1740871456702,
                "actualOnDeckTime": 1740871909559,
                "actualOnFieldTime": 1740872446590
            }
        },
        {
            "label": "Qualification 48",
            "status": "Queuing soon",
            "redTeams": [
                "319",
                "138",
                "8708"
            ],
            "blueTeams": [
                "4909",
                "97",
                "663"
            ],
            "times": {
                "scheduledStartTime": 1740869520000,
                "estimatedQueueTime": 1740871910714,
                "estimatedOnDeckTime": 1740872446601,
                "estimatedOnFieldTime": 1740873304668,
                "estimatedStartTime": 1740873609668,
                "actualQueueTime": 1740871910714,
                "actualOnDeckTime": 1740872446601,
                "actualOnFieldTime": 1740873304668
            }
        },
        {
            "label": "Qualification 49",
            "status": "Queuing soon",
            "redTeams": [
                "1247",
                "1768",
                "10156"
            ],
            "blueTeams": [
                "8410",
                "9644",
                "9729"
            ],
            "times": {
                "scheduledStartTime": 1740870000000,
                "estimatedQueueTime": 1740872447173,
                "estimatedOnDeckTime": 1740873304675,
                "estimatedOnFieldTime": 1740873704345,
                "estimatedStartTime": 1740874009345,
                "actualQueueTime": 1740872447173,
                "actualOnDeckTime": 1740873304675,
                "actualOnFieldTime": 1740873704345
            }
        },
        {
            "label": "Qualification 50",
            "status": "Queuing soon",
            "redTeams": [
                "1721",
                "5491",
                "3467"
            ],
            "blueTeams": [
                "2342",
                "4925",
                "7314"
            ],
            "times": {
                "scheduledStartTime": 1740870480000,
                "estimatedQueueTime": 1740873305112,
                "estimatedOnDeckTime": 1740873704353,
                "estimatedOnFieldTime": 1740874178689,
                "estimatedStartTime": 1740874483689,
                "actualQueueTime": 1740873305112,
                "actualOnDeckTime": 1740873704353,
                "actualOnFieldTime": 1740874178689
            }
        },
        {
            "label": "Qualification 51",
            "status": "Queuing soon",
            "redTeams": [
                "1761",
                "6690",
                "501"
            ],
            "blueTeams": [
                "9443",
                "1512",
                "3623"
            ],
            "times": {
                "scheduledStartTime": 1740870960000,
                "estimatedQueueTime": 1740873704993,
                "estimatedOnDeckTime": 1740874178697,
                "estimatedOnFieldTime": 1740874627713,
                "estimatedStartTime": 1740874932713,
                "actualQueueTime": 1740873704993,
                "actualOnDeckTime": 1740874178697,
                "actualOnFieldTime": 1740874627713
            }
        },
        {
            "label": "Qualification 52",
            "status": "Queuing soon",
            "redTeams": [
                "6620",
                "3566",
                "8708"
            ],
            "blueTeams": [
                "8013",
                "6328",
                "4987"
            ],
            "times": {
                "scheduledStartTime": 1740871440000,
                "estimatedQueueTime": 1740874179198,
                "estimatedOnDeckTime": 1740874627721,
                "estimatedOnFieldTime": 1740875372277,
                "estimatedStartTime": 1740875677277,
                "actualQueueTime": 1740874179198,
                "actualOnDeckTime": 1740874627721,
                "actualOnFieldTime": 1740875372277
            }
        },
        {
            "label": "Qualification 53",
            "status": "Queuing soon",
            "redTeams": [
                "319",
                "5962",
                "97"
            ],
            "blueTeams": [
                "2877",
                "5902",
                "6201"
            ],
            "times": {
                "scheduledStartTime": 1740871920000,
                "estimatedQueueTime": 1740874628186,
                "estimatedOnDeckTime": 1740875372289,
                "estimatedOnFieldTime": 1740875694709,
                "estimatedStartTime": 1740875999709,
                "actualQueueTime": 1740874628186,
                "actualOnDeckTime": 1740875372289,
                "actualOnFieldTime": 1740875694709
            }
        },
        {
            "label": "Qualification 54",
            "status": "Queuing soon",
            "redTeams": [
                "811",
                "1277",
                "4909"
            ],
            "blueTeams": [
                "1058",
                "138",
                "663"
            ],
            "times": {
                "scheduledStartTime": 1740872400000,
                "estimatedQueueTime": 1740875372851,
                "estimatedOnDeckTime": 1740875694719,
                "estimatedOnFieldTime": 1740876109504,
                "estimatedStartTime": 1740876414504,
                "actualQueueTime": 1740875372851,
                "actualOnDeckTime": 1740875694719,
                "actualOnFieldTime": 1740876109504
            }
        },
        {
            "label": "Qualification 55",
            "status": "Queuing soon",
            "redTeams": [
                "1721",
                "7314",
                "10156"
            ],
            "blueTeams": [
                "1761",
                "9443",
                "1247"
            ],
            "times": {
                "scheduledStartTime": 1740872880000,
                "estimatedQueueTime": 1740923047186,
                "estimatedOnDeckTime": 1740876109512,
                "estimatedOnFieldTime": 1740923540373,
                "estimatedStartTime": 1740923845373,
                "actualQueueTime": 1740923047186,
                "actualOnDeckTime": 1740876109512,
                "actualOnFieldTime": 1740923540373
            },
            "breakAfter": "End of day"
        },
        {
            "label": "Qualification 56",
            "status": "Queuing soon",
            "redTeams": [
                "1512",
                "8708",
                "1768"
            ],
            "blueTeams": [
                "9729",
                "4987",
                "501"
            ],
            "times": {
                "scheduledStartTime": 1740925200000,
                "estimatedQueueTime": 1740923540375,
                "estimatedOnDeckTime": 1740923572707,
                "estimatedOnFieldTime": 1740925512096,
                "estimatedStartTime": 1740925817096,
                "actualQueueTime": 1740923540375,
                "actualOnDeckTime": 1740923572707,
                "actualOnFieldTime": 1740925512096
            }
        },
        {
            "label": "Qualification 57",
            "status": "Queuing soon",
            "redTeams": [
                "6328",
                "3623",
                "5902"
            ],
            "blueTeams": [
                "3566",
                "8410",
                "319"
            ],
            "times": {
                "scheduledStartTime": 1740925680000,
                "estimatedQueueTime": 1740925043775,
                "estimatedOnDeckTime": 1740925512110,
                "estimatedOnFieldTime": 1740926023722,
                "estimatedStartTime": 1740926328722,
                "actualQueueTime": 1740925043775,
                "actualOnDeckTime": 1740925512110,
                "actualOnFieldTime": 1740926023722
            }
        },
        {
            "label": "Qualification 58",
            "status": "Queuing soon",
            "redTeams": [
                "2342",
                "811",
                "663"
            ],
            "blueTeams": [
                "4909",
                "6201",
                "3467"
            ],
            "times": {
                "scheduledStartTime": 1740926160000,
                "estimatedQueueTime": 1740925512876,
                "estimatedOnDeckTime": 1740926023734,
                "estimatedOnFieldTime": 1740926345487,
                "estimatedStartTime": 1740926650487,
                "actualQueueTime": 1740925512876,
                "actualOnDeckTime": 1740926023734,
                "actualOnFieldTime": 1740926345487
            }
        },
        {
            "label": "Qualification 59",
            "status": "Queuing soon",
            "redTeams": [
                "6620",
                "5491",
                "6690"
            ],
            "blueTeams": [
                "5962",
                "138",
                "9644"
            ],
            "times": {
                "scheduledStartTime": 1740926640000,
                "estimatedQueueTime": 1740926024477,
                "estimatedOnDeckTime": 1740926345499,
                "estimatedOnFieldTime": 1740926763333,
                "estimatedStartTime": 1740927068333,
                "actualQueueTime": 1740926024477,
                "actualOnDeckTime": 1740926345499,
                "actualOnFieldTime": 1740926763333
            }
        },
        {
            "label": "Qualification 60",
            "status": "Queuing soon",
            "redTeams": [
                "97",
                "2877",
                "1058"
            ],
            "blueTeams": [
                "1277",
                "4925",
                "8013"
            ],
            "times": {
                "scheduledStartTime": 1740927120000,
                "estimatedQueueTime": 1740926346239,
                "estimatedOnDeckTime": 1740926763348,
                "estimatedOnFieldTime": 1740927206364,
                "estimatedStartTime": 1740927511364,
                "actualQueueTime": 1740926346239,
                "actualOnDeckTime": 1740926763348,
                "actualOnFieldTime": 1740927206364
            }
        },
        {
            "label": "Qualification 61",
            "status": "Queuing soon",
            "redTeams": [
                "1512",
                "6328",
                "8410"
            ],
            "blueTeams": [
                "7314",
                "4987",
                "319"
            ],
            "times": {
                "scheduledStartTime": 1740927600000,
                "estimatedQueueTime": 1740926763770,
                "estimatedOnDeckTime": 1740927206374,
                "estimatedOnFieldTime": 1740927717229,
                "estimatedStartTime": 1740928022229,
                "actualQueueTime": 1740926763770,
                "actualOnDeckTime": 1740927206374,
                "actualOnFieldTime": 1740927717229
            }
        },
        {
            "label": "Qualification 62",
            "status": "Queuing soon",
            "redTeams": [
                "1247",
                "3566",
                "9729"
            ],
            "blueTeams": [
                "10156",
                "663",
                "501"
            ],
            "times": {
                "scheduledStartTime": 1740928080000,
                "estimatedQueueTime": 1740927207249,
                "estimatedOnDeckTime": 1740927717238,
                "estimatedOnFieldTime": 1740928259060,
                "estimatedStartTime": 1740928564060,
                "actualQueueTime": 1740927207249,
                "actualOnDeckTime": 1740927717238,
                "actualOnFieldTime": 1740928259060
            }
        },
        {
            "label": "Qualification 63",
            "status": "Queuing soon",
            "redTeams": [
                "9644",
                "811",
                "1768"
            ],
            "blueTeams": [
                "1721",
                "9443",
                "6620"
            ],
            "times": {
                "scheduledStartTime": 1740928560000,
                "estimatedQueueTime": 1740927717672,
                "estimatedOnDeckTime": 1740928259071,
                "estimatedOnFieldTime": 1740928687951,
                "estimatedStartTime": 1740928992951,
                "actualQueueTime": 1740927717672,
                "actualOnDeckTime": 1740928259071,
                "actualOnFieldTime": 1740928687951
            }
        },
        {
            "label": "Qualification 64",
            "status": "Queuing soon",
            "redTeams": [
                "5902",
                "1058",
                "1277"
            ],
            "blueTeams": [
                "3467",
                "6690",
                "2877"
            ],
            "times": {
                "scheduledStartTime": 1740929040000,
                "estimatedQueueTime": 1740928259639,
                "estimatedOnDeckTime": 1740928687961,
                "estimatedOnFieldTime": 1740929263025,
                "estimatedStartTime": 1740929568025,
                "actualQueueTime": 1740928259639,
                "actualOnDeckTime": 1740928687961,
                "actualOnFieldTime": 1740929263025
            }
        },
        {
            "label": "Qualification 65",
            "status": "Queuing soon",
            "redTeams": [
                "6201",
                "5962",
                "4925"
            ],
            "blueTeams": [
                "138",
                "2342",
                "1761"
            ],
            "times": {
                "scheduledStartTime": 1740929520000,
                "estimatedQueueTime": 1740928688607,
                "estimatedOnDeckTime": 1740929263313,
                "estimatedOnFieldTime": 1740929607943,
                "estimatedStartTime": 1740929912943,
                "actualQueueTime": 1740928688607,
                "actualOnDeckTime": 1740929263313,
                "actualOnFieldTime": 1740929607943
            }
        },
        {
            "label": "Qualification 66",
            "status": "Queuing soon",
            "redTeams": [
                "8013",
                "5491",
                "97"
            ],
            "blueTeams": [
                "8708",
                "3623",
                "4909"
            ],
            "times": {
                "scheduledStartTime": 1740930000000,
                "estimatedQueueTime": 1740929263919,
                "estimatedOnDeckTime": 1740929607952,
                "estimatedOnFieldTime": 1740930147754,
                "estimatedStartTime": 1740930452754,
                "actualQueueTime": 1740929263919,
                "actualOnDeckTime": 1740929607952,
                "actualOnFieldTime": 1740930147754
            }
        },
        {
            "label": "Qualification 67",
            "status": "Queuing soon",
            "redTeams": [
                "9644",
                "501",
                "319"
            ],
            "blueTeams": [
                "663",
                "7314",
                "6328"
            ],
            "times": {
                "scheduledStartTime": 1740930480000,
                "estimatedQueueTime": 1740929608292,
                "estimatedOnDeckTime": 1740930147765,
                "estimatedOnFieldTime": 1740930642329,
                "estimatedStartTime": 1740930947329,
                "actualQueueTime": 1740929608292,
                "actualOnDeckTime": 1740930147765,
                "actualOnFieldTime": 1740930642329
            }
        },
        {
            "label": "Qualification 68",
            "status": "Queuing soon",
            "redTeams": [
                "1768",
                "1277",
                "9443"
            ],
            "blueTeams": [
                "6620",
                "8410",
                "2877"
            ],
            "times": {
                "scheduledStartTime": 1740930960000,
                "estimatedQueueTime": 1740930148085,
                "estimatedOnDeckTime": 1740930642339,
                "estimatedOnFieldTime": 1740931055547,
                "estimatedStartTime": 1740931360547,
                "actualQueueTime": 1740930148085,
                "actualOnDeckTime": 1740930642339,
                "actualOnFieldTime": 1740931055547
            }
        },
        {
            "label": "Qualification 69",
            "status": "Queuing soon",
            "redTeams": [
                "3467",
                "9729",
                "10156"
            ],
            "blueTeams": [
                "6201",
                "6690",
                "1721"
            ],
            "times": {
                "scheduledStartTime": 1740931440000,
                "estimatedQueueTime": 1740930643055,
                "estimatedOnDeckTime": 1740931055556,
                "estimatedOnFieldTime": 1740931527225,
                "estimatedStartTime": 1740931832225,
                "actualQueueTime": 1740930643055,
                "actualOnDeckTime": 1740931055556,
                "actualOnFieldTime": 1740931527225
            }
        },
        {
            "label": "Qualification 70",
            "status": "Queuing soon",
            "redTeams": [
                "3566",
                "8013",
                "138"
            ],
            "blueTeams": [
                "8708",
                "2342",
                "4987"
            ],
            "times": {
                "scheduledStartTime": 1740931920000,
                "estimatedQueueTime": 1740931057571,
                "estimatedOnDeckTime": 1740931527234,
                "estimatedOnFieldTime": 1740931961309,
                "estimatedStartTime": 1740932266309,
                "actualQueueTime": 1740931057571,
                "actualOnDeckTime": 1740931527234,
                "actualOnFieldTime": 1740931961309
            }
        },
        {
            "label": "Qualification 71",
            "status": "Queuing soon",
            "redTeams": [
                "5491",
                "5902",
                "811"
            ],
            "blueTeams": [
                "3623",
                "1247",
                "97"
            ],
            "times": {
                "scheduledStartTime": 1740932400000,
                "estimatedQueueTime": 1740931527944,
                "estimatedOnDeckTime": 1740931961318,
                "estimatedOnFieldTime": 1740934069022,
                "estimatedStartTime": 1740934374022,
                "actualQueueTime": 1740931527944,
                "actualOnDeckTime": 1740931961318,
                "actualOnFieldTime": 1740934069022
            }
        },
        {
            "label": "Qualification 72",
            "status": "Queuing soon",
            "redTeams": [
                "1761",
                "4909",
                "5962"
            ],
            "blueTeams": [
                "4925",
                "1512",
                "1058"
            ],
            "times": {
                "scheduledStartTime": 1740932880000,
                "estimatedQueueTime": 1740931961826,
                "estimatedOnDeckTime": 1741571429097,
                "estimatedOnFieldTime": 1740934071550,
                "estimatedStartTime": 1740934376550,
                "actualQueueTime": 1740931961826,
                "actualOnFieldTime": 1740934071550
            },
            "breakAfter": "Alliance selection"
        },
        {
            "label": "Playoff 1",
            "status": "Queuing soon",
            "redTeams": [
                "3467",
                "6328",
                "9443"
            ],
            "blueTeams": [
                "8708",
                "8410",
                "501"
            ],
            "times": {
                "estimatedQueueTime": 1740937585833,
                "estimatedOnDeckTime": 1740937828169,
                "estimatedOnFieldTime": 1740938137659,
                "estimatedStartTime": 1740938497659,
                "actualQueueTime": 1740937585833,
                "actualOnDeckTime": 1740937828169,
                "actualOnFieldTime": 1740938137659
            }
        },
        {
            "label": "Playoff 2",
            "status": "Queuing soon",
            "redTeams": [
                "138",
                "2342",
                "6690"
            ],
            "blueTeams": [
                "8013",
                "1058",
                "1277"
            ],
            "times": {
                "estimatedQueueTime": 1740937832357,
                "estimatedOnDeckTime": 1740938137670,
                "estimatedOnFieldTime": 1740938819786,
                "estimatedStartTime": 1740939179786,
                "actualQueueTime": 1740937832357,
                "actualOnDeckTime": 1740938137670,
                "actualOnFieldTime": 1740938819786
            }
        },
        {
            "label": "Playoff 3",
            "status": "Queuing soon",
            "redTeams": [
                "4909",
                "2877",
                "1512"
            ],
            "blueTeams": [
                "4925",
                "5962",
                "319"
            ],
            "times": {
                "estimatedQueueTime": 1740938139035,
                "estimatedOnDeckTime": 1740938819799,
                "estimatedOnFieldTime": 1740939292449,
                "estimatedStartTime": 1740939652449,
                "actualQueueTime": 1740938139035,
                "actualOnDeckTime": 1740938819799,
                "actualOnFieldTime": 1740939292449
            }
        },
        {
            "label": "Playoff 4",
            "status": "Queuing soon",
            "redTeams": [
                "9644",
                "1768",
                "1721"
            ],
            "blueTeams": [
                "6201",
                "663",
                "3623"
            ],
            "times": {
                "estimatedQueueTime": 1740938820643,
                "estimatedOnDeckTime": 1740939292460,
                "estimatedOnFieldTime": 1740939781514,
                "estimatedStartTime": 1740940141514,
                "actualQueueTime": 1740938820643,
                "actualOnDeckTime": 1740939292460,
                "actualOnFieldTime": 1740939781514
            }
        },
        {
            "label": "Playoff 5",
            "status": "Queuing soon",
            "redTeams": [
                "8708",
                "8410",
                "501"
            ],
            "blueTeams": [
                "8013",
                "1058",
                "1277"
            ],
            "times": {
                "estimatedQueueTime": 1740939293126,
                "estimatedOnDeckTime": 1740939781525,
                "estimatedOnFieldTime": 1740940671796,
                "estimatedStartTime": 1740941031796,
                "actualQueueTime": 1740939293126,
                "actualOnDeckTime": 1740939781525,
                "actualOnFieldTime": 1740940671796
            }
        },
        {
            "label": "Playoff 6",
            "status": "Queuing soon",
            "redTeams": [
                "4925",
                "5962",
                "319"
            ],
            "blueTeams": [
                "6201",
                "663",
                "3623"
            ],
            "times": {
                "estimatedQueueTime": 1740940671805,
                "estimatedOnDeckTime": 1740940671805,
                "estimatedOnFieldTime": 1740941432174,
                "estimatedStartTime": 1740941792174,
                "actualQueueTime": 1740940671805,
                "actualOnDeckTime": 1740940671805,
                "actualOnFieldTime": 1740941432174
            }
        },
        {
            "label": "Playoff 7",
            "status": "Queuing soon",
            "redTeams": [
                "3467",
                "6328",
                "9443"
            ],
            "blueTeams": [
                "138",
                "2342",
                "6690"
            ],
            "times": {
                "estimatedQueueTime": 1740940672833,
                "estimatedOnDeckTime": 1740941432183,
                "estimatedOnFieldTime": 1740942262255,
                "estimatedStartTime": 1740942622255,
                "actualQueueTime": 1740940672833,
                "actualOnDeckTime": 1740941432183,
                "actualOnFieldTime": 1740942262255
            }
        },
        {
            "label": "Playoff 8",
            "status": "Queuing soon",
            "redTeams": [
                "4909",
                "2877",
                "1512"
            ],
            "blueTeams": [
                "9644",
                "1768",
                "1721"
            ],
            "times": {
                "estimatedQueueTime": 1740941432559,
                "estimatedOnDeckTime": 1740942262264,
                "estimatedOnFieldTime": 1740942780170,
                "estimatedStartTime": 1740943140170,
                "actualQueueTime": 1740941432559,
                "actualOnDeckTime": 1740942262264,
                "actualOnFieldTime": 1740942780170
            }
        },
        {
            "label": "Playoff 9",
            "status": "Queuing soon",
            "redTeams": [
                "3467",
                "6328",
                "9443"
            ],
            "blueTeams": [
                "6201",
                "663",
                "3623"
            ],
            "times": {
                "estimatedQueueTime": 1740942780183,
                "estimatedOnDeckTime": 1740942780183,
                "estimatedOnFieldTime": 1740943369948,
                "estimatedStartTime": 1740943729948,
                "actualQueueTime": 1740942780183,
                "actualOnDeckTime": 1740942780183,
                "actualOnFieldTime": 1740943369948
            }
        },
        {
            "label": "Playoff 10",
            "status": "Queuing soon",
            "redTeams": [
                "9644",
                "1768",
                "1721"
            ],
            "blueTeams": [
                "8708",
                "8410",
                "501"
            ],
            "times": {
                "estimatedQueueTime": 1740943369956,
                "estimatedOnDeckTime": 1740943369956,
                "estimatedOnFieldTime": 1740943877334,
                "estimatedStartTime": 1740944237334,
                "actualQueueTime": 1740943369956,
                "actualOnDeckTime": 1740943369956,
                "actualOnFieldTime": 1740943877334
            },
            "breakAfter": "Break"
        },
        {
            "label": "Playoff 11",
            "status": "Queuing soon",
            "redTeams": [
                "138",
                "2342",
                "6690"
            ],
            "blueTeams": [
                "4909",
                "2877",
                "1512"
            ],
            "times": {
                "estimatedQueueTime": 1740944417024,
                "estimatedOnDeckTime": 1740944417024,
                "estimatedOnFieldTime": 1740944883438,
                "estimatedStartTime": 1740945243438,
                "actualQueueTime": 1740944417024,
                "actualOnDeckTime": 1740944417024,
                "actualOnFieldTime": 1740944883438
            }
        },
        {
            "label": "Playoff 12",
            "status": "Queuing soon",
            "redTeams": [
                "9644",
                "1768",
                "1721"
            ],
            "blueTeams": [
                "3467",
                "6328",
                "9443"
            ],
            "times": {
                "estimatedQueueTime": 1740944417774,
                "estimatedOnDeckTime": 1740944883447,
                "estimatedOnFieldTime": 1740945249027,
                "estimatedStartTime": 1740945609027,
                "actualQueueTime": 1740944417774,
                "actualOnDeckTime": 1740944883447,
                "actualOnFieldTime": 1740945249027
            },
            "breakAfter": "Awards break"
        },
        {
            "label": "Playoff 13",
            "status": "Queuing soon",
            "redTeams": [
                "138",
                "2342",
                "6690"
            ],
            "blueTeams": [
                "3467",
                "6328",
                "9443"
            ],
            "times": {
                "estimatedQueueTime": 1740946225366,
                "estimatedOnDeckTime": 1740946225366,
                "estimatedOnFieldTime": 1740947071486,
                "estimatedStartTime": 1740947431486,
                "actualQueueTime": 1740946225366,
                "actualOnDeckTime": 1740946225366,
                "actualOnFieldTime": 1740947071486
            },
            "breakAfter": "Awards break"
        },
        {
            "label": "Final 1",
            "status": "Queuing soon",
            "redTeams": [
                "4909",
                "2877",
                "1512"
            ],
            "blueTeams": [
                "3467",
                "6328",
                "9443"
            ],
            "times": {
                "estimatedQueueTime": 1740947615386,
                "estimatedOnDeckTime": 1740947615386,
                "estimatedOnFieldTime": 1740948732219,
                "estimatedStartTime": 1740949092219,
                "actualQueueTime": 1740947615386,
                "actualOnDeckTime": 1740947615386,
                "actualOnFieldTime": 1740948732219
            },
            "breakAfter": "Awards break"
        },
        {
            "label": "Final 2",
            "status": "Queuing soon",
            "redTeams": [
                "4909",
                "2877",
                "1512"
            ],
            "blueTeams": [
                "3467",
                "6328",
                "9443"
            ],
            "times": {
                "estimatedQueueTime": 1740949432226,
                "estimatedOnDeckTime": 1740949432226,
                "estimatedOnFieldTime": 1740949465047,
                "estimatedStartTime": 1740949825047,
                "actualQueueTime": 1740949432226,
                "actualOnDeckTime": 1740949432226,
                "actualOnFieldTime": 1740949465047
            },
            "breakAfter": "Awards break"
        }
    ],
    "announcements": [],
    "partsRequests": []
};

const nexusStatusRed = {
    "eventKey": "2025nhsal",
    "dataAsOfTime": 1741571429097,
    "nowQueuing": "Qualification 27",
    "matches": [
        {
            "label": "Practice 1",
            "status": "On field",
            "redTeams": [
                "5902",
                "811",
                "2342"
            ],
            "blueTeams": [
                "1768",
                "6328",
                "3623"
            ],
            "times": {
                "scheduledStartTime": 1740838500000,
                "estimatedQueueTime": 1740837416018,
                "estimatedOnDeckTime": 1740838211521,
                "estimatedOnFieldTime": 1740838836806,
                "estimatedStartTime": 1740839256806,
                "actualQueueTime": 1740837416018,
                "actualOnDeckTime": 1740838211521,
                "actualOnFieldTime": 1740838836806
            }
        },
        {
            "label": "Practice 2",
            "status": "On field",
            "redTeams": [
                "8410",
                "6620",
                "9729"
            ],
            "blueTeams": [
                "4925",
                "663",
                "6690"
            ],
            "times": {
                "scheduledStartTime": 1740839100000,
                "estimatedQueueTime": 1740838236546,
                "estimatedOnDeckTime": 1740838836816,
                "estimatedOnFieldTime": 1740839398809,
                "estimatedStartTime": 1740839818809,
                "actualQueueTime": 1740838236546,
                "actualOnDeckTime": 1740838836816,
                "actualOnFieldTime": 1740839398809
            }
        },
        {
            "label": "Practice 3",
            "status": "On field",
            "redTeams": [
                "138",
                "6201",
                "3467"
            ],
            "blueTeams": [
                "501",
                "1277",
                "97"
            ],
            "times": {
                "scheduledStartTime": 1740839700000,
                "estimatedQueueTime": 1740838837545,
                "estimatedOnDeckTime": 1740839398822,
                "estimatedOnFieldTime": 1740840195843,
                "estimatedStartTime": 1740840615843,
                "actualQueueTime": 1740838837545,
                "actualOnDeckTime": 1740839398822,
                "actualOnFieldTime": 1740840195843
            }
        },
        {
            "label": "Practice 4",
            "status": "On field",
            "redTeams": [
                "8013",
                "1058",
                "2877"
            ],
            "blueTeams": [
                "8708",
                "319",
                "10156"
            ],
            "times": {
                "scheduledStartTime": 1740840300000,
                "estimatedQueueTime": 1740839399540,
                "estimatedOnDeckTime": 1740840195851,
                "estimatedOnFieldTime": 1740840956766,
                "estimatedStartTime": 1740841376766,
                "actualQueueTime": 1740839399540,
                "actualOnDeckTime": 1740840195851,
                "actualOnFieldTime": 1740840956766
            }
        },
        {
            "label": "Practice 5",
            "status": "On field",
            "redTeams": [
                "9443",
                "6328",
                "3467"
            ],
            "blueTeams": [
                "4909",
                "9644",
                "1768"
            ],
            "times": {
                "scheduledStartTime": 1740840900000,
                "estimatedQueueTime": 1740840196306,
                "estimatedOnDeckTime": 1740840956776,
                "estimatedOnFieldTime": 1740842047409,
                "estimatedStartTime": 1740842467409,
                "actualQueueTime": 1740840196306,
                "actualOnDeckTime": 1740840956776,
                "actualOnFieldTime": 1740842047409
            }
        },
        {
            "label": "Practice 6",
            "status": "On field",
            "redTeams": [
                "1721",
                "6328",
                "4909"
            ],
            "blueTeams": [
                "3467",
                "7314",
                "5962"
            ],
            "times": {
                "scheduledStartTime": 1740841500000,
                "estimatedQueueTime": 1740840957060,
                "estimatedOnDeckTime": 1740842047427,
                "estimatedOnFieldTime": 1740842598148,
                "estimatedStartTime": 1740843018148,
                "actualQueueTime": 1740840957060,
                "actualOnDeckTime": 1740842047427,
                "actualOnFieldTime": 1740842598148
            }
        },
        {
            "label": "Qualification 1",
            "status": "On field",
            "redTeams": [
                "663",
                "6620",
                "319"
            ],
            "blueTeams": [
                "10156",
                "1761",
                "5491"
            ],
            "times": {
                "scheduledStartTime": 1740844800000,
                "estimatedQueueTime": 1740843379762,
                "estimatedOnDeckTime": 1740843511999,
                "estimatedOnFieldTime": 1740845866781,
                "estimatedStartTime": 1740846171781,
                "actualQueueTime": 1740843379762,
                "actualOnDeckTime": 1740843511999,
                "actualOnFieldTime": 1740845866781
            }
        },
        {
            "label": "Qualification 2",
            "status": "On field",
            "redTeams": [
                "811",
                "138",
                "9729"
            ],
            "blueTeams": [
                "4925",
                "3566",
                "5902"
            ],
            "times": {
                "scheduledStartTime": 1740845340000,
                "estimatedQueueTime": 1740843516090,
                "estimatedOnDeckTime": 1740845866790,
                "estimatedOnFieldTime": 1740846242311,
                "estimatedStartTime": 1740846547311,
                "actualQueueTime": 1740843516090,
                "actualOnDeckTime": 1740845866790,
                "actualOnFieldTime": 1740846242311
            }
        },
        {
            "label": "Qualification 3",
            "status": "On field",
            "redTeams": [
                "4987",
                "2877",
                "9443"
            ],
            "blueTeams": [
                "3467",
                "97",
                "1512"
            ],
            "times": {
                "scheduledStartTime": 1740845880000,
                "estimatedQueueTime": 1740845867244,
                "estimatedOnDeckTime": 1740846242320,
                "estimatedOnFieldTime": 1740846905295,
                "estimatedStartTime": 1740847210295,
                "actualQueueTime": 1740845867244,
                "actualOnDeckTime": 1740846242320,
                "actualOnFieldTime": 1740846905295
            }
        },
        {
            "label": "Qualification 4",
            "status": "On field",
            "redTeams": [
                "1277",
                "3623",
                "8410"
            ],
            "blueTeams": [
                "9644",
                "8013",
                "6201"
            ],
            "times": {
                "scheduledStartTime": 1740846420000,
                "estimatedQueueTime": 1740846243211,
                "estimatedOnDeckTime": 1740846905304,
                "estimatedOnFieldTime": 1740847507644,
                "estimatedStartTime": 1740847812644,
                "actualQueueTime": 1740846243211,
                "actualOnDeckTime": 1740846905304,
                "actualOnFieldTime": 1740847507644
            }
        },
        {
            "label": "Qualification 5",
            "status": "On field",
            "redTeams": [
                "2342",
                "1768",
                "6690"
            ],
            "blueTeams": [
                "1247",
                "501",
                "6328"
            ],
            "times": {
                "scheduledStartTime": 1740846960000,
                "estimatedQueueTime": 1740846906022,
                "estimatedOnDeckTime": 1740847507653,
                "estimatedOnFieldTime": 1740848391323,
                "estimatedStartTime": 1740848696323,
                "actualQueueTime": 1740846906022,
                "actualOnDeckTime": 1740847507653,
                "actualOnFieldTime": 1740848391323
            }
        },
        {
            "label": "Qualification 6",
            "status": "On field",
            "redTeams": [
                "1058",
                "7314",
                "4909"
            ],
            "blueTeams": [
                "8708",
                "1721",
                "5962"
            ],
            "times": {
                "scheduledStartTime": 1740847500000,
                "estimatedQueueTime": 1740847508521,
                "estimatedOnDeckTime": 1740848391333,
                "estimatedOnFieldTime": 1740849450454,
                "estimatedStartTime": 1740849755454,
                "actualQueueTime": 1740847508521,
                "actualOnDeckTime": 1740848391333,
                "actualOnFieldTime": 1740849450454
            }
        },
        {
            "label": "Qualification 7",
            "status": "On field",
            "redTeams": [
                "10156",
                "2877",
                "138"
            ],
            "blueTeams": [
                "4987",
                "3467",
                "3566"
            ],
            "times": {
                "scheduledStartTime": 1740848040000,
                "estimatedQueueTime": 1740848391738,
                "estimatedOnDeckTime": 1740849450463,
                "estimatedOnFieldTime": 1740849608799,
                "estimatedStartTime": 1740849913799,
                "actualQueueTime": 1740848391738,
                "actualOnDeckTime": 1740849450463,
                "actualOnFieldTime": 1740849608799
            }
        },
        {
            "label": "Qualification 8",
            "status": "On field",
            "redTeams": [
                "8013",
                "1512",
                "811"
            ],
            "blueTeams": [
                "5491",
                "9644",
                "1277"
            ],
            "times": {
                "scheduledStartTime": 1740848520000,
                "estimatedQueueTime": 1740849450870,
                "estimatedOnDeckTime": 1740849608807,
                "estimatedOnFieldTime": 1740849912685,
                "estimatedStartTime": 1740850217685,
                "actualQueueTime": 1740849450870,
                "actualOnDeckTime": 1740849608807,
                "actualOnFieldTime": 1740849912685
            }
        },
        {
            "label": "Qualification 9",
            "status": "On field",
            "redTeams": [
                "5902",
                "319",
                "9443"
            ],
            "blueTeams": [
                "2342",
                "6201",
                "1247"
            ],
            "times": {
                "scheduledStartTime": 1740849000000,
                "estimatedQueueTime": 1740849609261,
                "estimatedOnDeckTime": 1740849912693,
                "estimatedOnFieldTime": 1740850800422,
                "estimatedStartTime": 1740851105422,
                "actualQueueTime": 1740849609261,
                "actualOnDeckTime": 1740849912693,
                "actualOnFieldTime": 1740850800422
            }
        },
        {
            "label": "Qualification 10",
            "status": "On field",
            "redTeams": [
                "8410",
                "1058",
                "5962"
            ],
            "blueTeams": [
                "9729",
                "663",
                "1721"
            ],
            "times": {
                "scheduledStartTime": 1740849480000,
                "estimatedQueueTime": 1740849913435,
                "estimatedOnDeckTime": 1740850806255,
                "estimatedOnFieldTime": 1740851124213,
                "estimatedStartTime": 1740851429213,
                "actualQueueTime": 1740849913435,
                "actualOnDeckTime": 1740850806255,
                "actualOnFieldTime": 1740851124213
            },
            "breakAfter": "Lunch"
        },
        {
            "label": "Qualification 11",
            "status": "On field",
            "redTeams": [
                "4925",
                "6620",
                "1761"
            ],
            "blueTeams": [
                "501",
                "97",
                "8708"
            ],
            "times": {
                "scheduledStartTime": 1740849960000,
                "estimatedQueueTime": 1740852977475,
                "estimatedOnDeckTime": 1740852977475,
                "estimatedOnFieldTime": 1740853392382,
                "estimatedStartTime": 1740853697382,
                "actualQueueTime": 1740852977475,
                "actualOnDeckTime": 1740852977475,
                "actualOnFieldTime": 1740853392382
            }
        },
        {
            "label": "Qualification 12",
            "status": "On field",
            "redTeams": [
                "6690",
                "3623",
                "7314"
            ],
            "blueTeams": [
                "4909",
                "6328",
                "1768"
            ],
            "times": {
                "scheduledStartTime": 1740850440000,
                "estimatedQueueTime": 1740852978285,
                "estimatedOnDeckTime": 1740853392393,
                "estimatedOnFieldTime": 1740854187992,
                "estimatedStartTime": 1740854492992,
                "actualQueueTime": 1740852978285,
                "actualOnDeckTime": 1740853392393,
                "actualOnFieldTime": 1740854187992
            }
        },
        {
            "label": "Qualification 13",
            "status": "On field",
            "redTeams": [
                "811",
                "1247",
                "2877"
            ],
            "blueTeams": [
                "3467",
                "319",
                "2342"
            ],
            "times": {
                "scheduledStartTime": 1740850920000,
                "estimatedQueueTime": 1740853392871,
                "estimatedOnDeckTime": 1740854188001,
                "estimatedOnFieldTime": 1740854723444,
                "estimatedStartTime": 1740855028444,
                "actualQueueTime": 1740853392871,
                "actualOnDeckTime": 1740854188001,
                "actualOnFieldTime": 1740854723444
            }
        },
        {
            "label": "Qualification 14",
            "status": "On field",
            "redTeams": [
                "9443",
                "663",
                "8013"
            ],
            "blueTeams": [
                "5962",
                "10156",
                "1512"
            ],
            "times": {
                "scheduledStartTime": 1740851400000,
                "estimatedQueueTime": 1740854188401,
                "estimatedOnDeckTime": 1740854723454,
                "estimatedOnFieldTime": 1740855165431,
                "estimatedStartTime": 1740855470431,
                "actualQueueTime": 1740854188401,
                "actualOnDeckTime": 1740854723454,
                "actualOnFieldTime": 1740855165431
            }
        },
        {
            "label": "Qualification 15",
            "status": "On field",
            "redTeams": [
                "97",
                "5902",
                "1721"
            ],
            "blueTeams": [
                "501",
                "6620",
                "1277"
            ],
            "times": {
                "scheduledStartTime": 1740853680000,
                "estimatedQueueTime": 1740854723827,
                "estimatedOnDeckTime": 1740855165443,
                "estimatedOnFieldTime": 1740855830093,
                "estimatedStartTime": 1740856135093,
                "actualQueueTime": 1740854723827,
                "actualOnDeckTime": 1740855165443,
                "actualOnFieldTime": 1740855830093
            }
        },
        {
            "label": "Qualification 16",
            "status": "On field",
            "redTeams": [
                "1761",
                "1058",
                "9729"
            ],
            "blueTeams": [
                "138",
                "1768",
                "3623"
            ],
            "times": {
                "scheduledStartTime": 1740854160000,
                "estimatedQueueTime": 1740855166165,
                "estimatedOnDeckTime": 1740855830107,
                "estimatedOnFieldTime": 1740856228748,
                "estimatedStartTime": 1740856533748,
                "actualQueueTime": 1740855166165,
                "actualOnDeckTime": 1740855830107,
                "actualOnFieldTime": 1740856228748
            }
        },
        {
            "label": "Qualification 17",
            "status": "On field",
            "redTeams": [
                "6201",
                "8708",
                "7314"
            ],
            "blueTeams": [
                "6690",
                "9644",
                "3566"
            ],
            "times": {
                "scheduledStartTime": 1740854640000,
                "estimatedQueueTime": 1740855830768,
                "estimatedOnDeckTime": 1740856228767,
                "estimatedOnFieldTime": 1740856786997,
                "estimatedStartTime": 1740857091997,
                "actualQueueTime": 1740855830768,
                "actualOnDeckTime": 1740856228767,
                "actualOnFieldTime": 1740856786997
            }
        },
        {
            "label": "Qualification 18",
            "status": "On field",
            "redTeams": [
                "6328",
                "5491",
                "4925"
            ],
            "blueTeams": [
                "8410",
                "4909",
                "4987"
            ],
            "times": {
                "scheduledStartTime": 1740855120000,
                "estimatedQueueTime": 1740856229342,
                "estimatedOnDeckTime": 1740856787009,
                "estimatedOnFieldTime": 1740857253059,
                "estimatedStartTime": 1740857558059,
                "actualQueueTime": 1740856229342,
                "actualOnDeckTime": 1740856787009,
                "actualOnFieldTime": 1740857253059
            }
        },
        {
            "label": "Qualification 19",
            "status": "On field",
            "redTeams": [
                "501",
                "5962",
                "2342"
            ],
            "blueTeams": [
                "319",
                "10156",
                "811"
            ],
            "times": {
                "scheduledStartTime": 1740855600000,
                "estimatedQueueTime": 1740856787877,
                "estimatedOnDeckTime": 1740857253074,
                "estimatedOnFieldTime": 1740858043057,
                "estimatedStartTime": 1740858348057,
                "actualQueueTime": 1740856787877,
                "actualOnDeckTime": 1740857253074,
                "actualOnFieldTime": 1740858043057
            }
        },
        {
            "label": "Qualification 20",
            "status": "On field",
            "redTeams": [
                "3623",
                "8013",
                "6620"
            ],
            "blueTeams": [
                "9443",
                "3467",
                "1058"
            ],
            "times": {
                "scheduledStartTime": 1740856080000,
                "estimatedQueueTime": 1740857253500,
                "estimatedOnDeckTime": 1740858043069,
                "estimatedOnFieldTime": 1740858754836,
                "estimatedStartTime": 1740859059836,
                "actualQueueTime": 1740857253500,
                "actualOnDeckTime": 1740858043069,
                "actualOnFieldTime": 1740858754836
            }
        },
        {
            "label": "Qualification 21",
            "status": "On field",
            "redTeams": [
                "1768",
                "7314",
                "3566"
            ],
            "blueTeams": [
                "97",
                "1277",
                "138"
            ],
            "times": {
                "scheduledStartTime": 1740856560000,
                "estimatedQueueTime": 1740858043441,
                "estimatedOnDeckTime": 1740858754850,
                "estimatedOnFieldTime": 1740859396907,
                "estimatedStartTime": 1740859701907,
                "actualQueueTime": 1740858043441,
                "actualOnDeckTime": 1740858754850,
                "actualOnFieldTime": 1740859396907
            }
        },
        {
            "label": "Qualification 22",
            "status": "On field",
            "redTeams": [
                "9729",
                "6328",
                "6201"
            ],
            "blueTeams": [
                "2877",
                "4909",
                "5491"
            ],
            "times": {
                "scheduledStartTime": 1740857040000,
                "estimatedQueueTime": 1740858755316,
                "estimatedOnDeckTime": 1740859396918,
                "estimatedOnFieldTime": 1740859815238,
                "estimatedStartTime": 1740860120238,
                "actualQueueTime": 1740858755316,
                "actualOnDeckTime": 1740859396918,
                "actualOnFieldTime": 1740859815238
            }
        },
        {
            "label": "Qualification 23",
            "status": "On field",
            "redTeams": [
                "9644",
                "1512",
                "1247"
            ],
            "blueTeams": [
                "5902",
                "8708",
                "1761"
            ],
            "times": {
                "scheduledStartTime": 1740857520000,
                "estimatedQueueTime": 1740859397502,
                "estimatedOnDeckTime": 1740859815249,
                "estimatedOnFieldTime": 1740860404604,
                "estimatedStartTime": 1740860709604,
                "actualQueueTime": 1740859397502,
                "actualOnDeckTime": 1740859815249,
                "actualOnFieldTime": 1740860404604
            }
        },
        {
            "label": "Qualification 24",
            "status": "On field",
            "redTeams": [
                "4987",
                "1721",
                "4925"
            ],
            "blueTeams": [
                "663",
                "8410",
                "6690"
            ],
            "times": {
                "scheduledStartTime": 1740858000000,
                "estimatedQueueTime": 1740859815930,
                "estimatedOnDeckTime": 1740860404616,
                "estimatedOnFieldTime": 1740860974145,
                "estimatedStartTime": 1740861279145,
                "actualQueueTime": 1740859815930,
                "actualOnDeckTime": 1740860404616,
                "actualOnFieldTime": 1740860974145
            }
        },
        {
            "label": "Qualification 25",
            "status": "On field",
            "redTeams": [
                "6620",
                "10156",
                "2342"
            ],
            "blueTeams": [
                "7314",
                "811",
                "97"
            ],
            "times": {
                "scheduledStartTime": 1740858480000,
                "estimatedQueueTime": 1740860405055,
                "estimatedOnDeckTime": 1740860974157,
                "estimatedOnFieldTime": 1740861249735,
                "estimatedStartTime": 1740861554735,
                "actualQueueTime": 1740860405055,
                "actualOnDeckTime": 1740860974157,
                "actualOnFieldTime": 1740861249735
            }
        },
        {
            "label": "Qualification 26",
            "status": "On field",
            "redTeams": [
                "6201",
                "1058",
                "501"
            ],
            "blueTeams": [
                "3623",
                "9729",
                "5491"
            ],
            "times": {
                "scheduledStartTime": 1740858960000,
                "estimatedQueueTime": 1740860974534,
                "estimatedOnDeckTime": 1740861249746,
                "estimatedOnFieldTime": 1740861984344,
                "estimatedStartTime": 1740862289344,
                "actualQueueTime": 1740860974534,
                "actualOnDeckTime": 1740861249746,
                "actualOnFieldTime": 1740861984344
            }
        },
        {
            "label": "Qualification 27",
            "status": "Now queuing",
            "redTeams": [
                "1512",
                "4909",
                "3566"
            ],
            "blueTeams": [
                "5902",
                "3467",
                "9644"
            ],
            "times": {
                "scheduledStartTime": 1740859440000,
                "estimatedQueueTime": 1740861250576,
                "estimatedOnDeckTime": 1740861984355,
                "estimatedOnFieldTime": 1740862181828,
                "estimatedStartTime": 1740862486828,
                "actualQueueTime": 1740861250576,
                "actualOnDeckTime": 1740861984355,
                "actualOnFieldTime": 1740862181828
            }
        },
        {
            "label": "Qualification 28",
            "status": "On deck",
            "redTeams": [
                "663",
                "8708",
                "2877"
            ],
            "blueTeams": [
                "6328",
                "9443",
                "138"
            ],
            "times": {
                "scheduledStartTime": 1740859920000,
                "estimatedQueueTime": 1740861985131,
                "estimatedOnDeckTime": 1740862181840,
                "estimatedOnFieldTime": 1740862891992,
                "estimatedStartTime": 1740863196992,
                "actualQueueTime": 1740861985131,
                "actualOnDeckTime": 1740862181840,
                "actualOnFieldTime": 1740862891992
            }
        },
        {
            "label": "Qualification 29",
            "status": "Queuing soon",
            "redTeams": [
                "319",
                "1721",
                "8013"
            ],
            "blueTeams": [
                "1768",
                "1761",
                "8410"
            ],
            "times": {
                "scheduledStartTime": 1740860400000,
                "estimatedQueueTime": 1740862182399,
                "estimatedOnDeckTime": 1740862892007,
                "estimatedOnFieldTime": 1740863227114,
                "estimatedStartTime": 1740863532114,
                "actualQueueTime": 1740862182399,
                "actualOnDeckTime": 1740862892007,
                "actualOnFieldTime": 1740863227114
            }
        },
        {
            "label": "Qualification 30",
            "status": "Queuing soon",
            "redTeams": [
                "1277",
                "4987",
                "5962"
            ],
            "blueTeams": [
                "6690",
                "4925",
                "1247"
            ],
            "times": {
                "scheduledStartTime": 1740860880000,
                "estimatedQueueTime": 1740862892398,
                "estimatedOnDeckTime": 1740863227129,
                "estimatedOnFieldTime": 1740863658107,
                "estimatedStartTime": 1740863963107,
                "actualQueueTime": 1740862892398,
                "actualOnDeckTime": 1740863227129,
                "actualOnFieldTime": 1740863658107
            }
        },
        {
            "label": "Qualification 31",
            "status": "Queuing soon",
            "redTeams": [
                "97",
                "2342",
                "9644"
            ],
            "blueTeams": [
                "1512",
                "9729",
                "5902"
            ],
            "times": {
                "scheduledStartTime": 1740861360000,
                "estimatedQueueTime": 1740863227850,
                "estimatedOnDeckTime": 1740863658117,
                "estimatedOnFieldTime": 1740864169781,
                "estimatedStartTime": 1740864474781,
                "actualQueueTime": 1740863227850,
                "actualOnDeckTime": 1740863658117,
                "actualOnFieldTime": 1740864169781
            }
        },
        {
            "label": "Qualification 32",
            "status": "Queuing soon",
            "redTeams": [
                "6328",
                "3467",
                "8708"
            ],
            "blueTeams": [
                "1058",
                "811",
                "3623"
            ],
            "times": {
                "scheduledStartTime": 1740861840000,
                "estimatedQueueTime": 1740863659008,
                "estimatedOnDeckTime": 1740864169792,
                "estimatedOnFieldTime": 1740864779767,
                "estimatedStartTime": 1740865084767,
                "actualQueueTime": 1740863659008,
                "actualOnDeckTime": 1740864169792,
                "actualOnFieldTime": 1740864779767
            }
        },
        {
            "label": "Qualification 33",
            "status": "Queuing soon",
            "redTeams": [
                "138",
                "1721",
                "8410"
            ],
            "blueTeams": [
                "501",
                "9443",
                "7314"
            ],
            "times": {
                "scheduledStartTime": 1740862320000,
                "estimatedQueueTime": 1740864170181,
                "estimatedOnDeckTime": 1740864779797,
                "estimatedOnFieldTime": 1740865364293,
                "estimatedStartTime": 1740865669293,
                "actualQueueTime": 1740864170181,
                "actualOnDeckTime": 1740864779797,
                "actualOnFieldTime": 1740865364293
            }
        },
        {
            "label": "Qualification 34",
            "status": "Queuing soon",
            "redTeams": [
                "4909",
                "319",
                "4925"
            ],
            "blueTeams": [
                "10156",
                "1277",
                "6690"
            ],
            "times": {
                "scheduledStartTime": 1740862800000,
                "estimatedQueueTime": 1740864780734,
                "estimatedOnDeckTime": 1740865364304,
                "estimatedOnFieldTime": 1740865772409,
                "estimatedStartTime": 1740866077409,
                "actualQueueTime": 1740864780734,
                "actualOnDeckTime": 1740865364304,
                "actualOnFieldTime": 1740865772409
            }
        },
        {
            "label": "Qualification 35",
            "status": "Queuing soon",
            "redTeams": [
                "5491",
                "3566",
                "6201"
            ],
            "blueTeams": [
                "5962",
                "1768",
                "6620"
            ],
            "times": {
                "scheduledStartTime": 1740863280000,
                "estimatedQueueTime": 1740865365037,
                "estimatedOnDeckTime": 1740865772420,
                "estimatedOnFieldTime": 1740866089548,
                "estimatedStartTime": 1740866394548,
                "actualQueueTime": 1740865365037,
                "actualOnDeckTime": 1740865772420,
                "actualOnFieldTime": 1740866089548
            }
        },
        {
            "label": "Qualification 36",
            "status": "Queuing soon",
            "redTeams": [
                "1247",
                "663",
                "4987"
            ],
            "blueTeams": [
                "2877",
                "8013",
                "1761"
            ],
            "times": {
                "scheduledStartTime": 1740863760000,
                "estimatedQueueTime": 1740865773184,
                "estimatedOnDeckTime": 1740866089558,
                "estimatedOnFieldTime": 1740866785714,
                "estimatedStartTime": 1740867090714,
                "actualQueueTime": 1740865773184,
                "actualOnDeckTime": 1740866089558,
                "actualOnFieldTime": 1740866785714
            }
        },
        {
            "label": "Qualification 37",
            "status": "Queuing soon",
            "redTeams": [
                "9729",
                "97",
                "9443"
            ],
            "blueTeams": [
                "1721",
                "9644",
                "6328"
            ],
            "times": {
                "scheduledStartTime": 1740864240000,
                "estimatedQueueTime": 1740866090979,
                "estimatedOnDeckTime": 1740866785725,
                "estimatedOnFieldTime": 1740867386166,
                "estimatedStartTime": 1740867691166,
                "actualQueueTime": 1740866090979,
                "actualOnDeckTime": 1740866785725,
                "actualOnFieldTime": 1740867386166
            }
        },
        {
            "label": "Qualification 38",
            "status": "Queuing soon",
            "redTeams": [
                "8410",
                "5902",
                "2342"
            ],
            "blueTeams": [
                "8708",
                "10156",
                "1058"
            ],
            "times": {
                "scheduledStartTime": 1740864720000,
                "estimatedQueueTime": 1740866786319,
                "estimatedOnDeckTime": 1740867386178,
                "estimatedOnFieldTime": 1740868072555,
                "estimatedStartTime": 1740868377555,
                "actualQueueTime": 1740866786319,
                "actualOnDeckTime": 1740867386178,
                "actualOnFieldTime": 1740868072555
            }
        },
        {
            "label": "Qualification 39",
            "status": "Queuing soon",
            "redTeams": [
                "4925",
                "501",
                "3467"
            ],
            "blueTeams": [
                "5491",
                "319",
                "1768"
            ],
            "times": {
                "scheduledStartTime": 1740865200000,
                "estimatedQueueTime": 1740867386721,
                "estimatedOnDeckTime": 1740868072569,
                "estimatedOnFieldTime": 1740868572780,
                "estimatedStartTime": 1740868877780,
                "actualQueueTime": 1740867386721,
                "actualOnDeckTime": 1740868072569,
                "actualOnFieldTime": 1740868572780
            }
        },
        {
            "label": "Qualification 40",
            "status": "Queuing soon",
            "redTeams": [
                "4987",
                "6201",
                "3623"
            ],
            "blueTeams": [
                "7314",
                "2877",
                "1277"
            ],
            "times": {
                "scheduledStartTime": 1740865680000,
                "estimatedQueueTime": 1740868073248,
                "estimatedOnDeckTime": 1740868572790,
                "estimatedOnFieldTime": 1740869149431,
                "estimatedStartTime": 1740869454431,
                "actualQueueTime": 1740868073248,
                "actualOnDeckTime": 1740868572790,
                "actualOnFieldTime": 1740869149431
            }
        },
        {
            "label": "Qualification 41",
            "status": "Queuing soon",
            "redTeams": [
                "138",
                "6620",
                "1512"
            ],
            "blueTeams": [
                "8013",
                "1247",
                "4909"
            ],
            "times": {
                "scheduledStartTime": 1740866160000,
                "estimatedQueueTime": 1740868573693,
                "estimatedOnDeckTime": 1740869149443,
                "estimatedOnFieldTime": 1740869592980,
                "estimatedStartTime": 1740869897980,
                "actualQueueTime": 1740868573693,
                "actualOnDeckTime": 1740869149443,
                "actualOnFieldTime": 1740869592980
            }
        },
        {
            "label": "Qualification 42",
            "status": "Queuing soon",
            "redTeams": [
                "3566",
                "1761",
                "663"
            ],
            "blueTeams": [
                "5962",
                "6690",
                "811"
            ],
            "times": {
                "scheduledStartTime": 1740866640000,
                "estimatedQueueTime": 1740869150335,
                "estimatedOnDeckTime": 1740869592990,
                "estimatedOnFieldTime": 1740870108417,
                "estimatedStartTime": 1740870413417,
                "actualQueueTime": 1740869150335,
                "actualOnDeckTime": 1740869592990,
                "actualOnFieldTime": 1740870108417
            }
        },
        {
            "label": "Qualification 43",
            "status": "Queuing soon",
            "redTeams": [
                "9443",
                "8410",
                "10156"
            ],
            "blueTeams": [
                "1058",
                "2342",
                "5491"
            ],
            "times": {
                "scheduledStartTime": 1740867120000,
                "estimatedQueueTime": 1740869593202,
                "estimatedOnDeckTime": 1740870108428,
                "estimatedOnFieldTime": 1740870542123,
                "estimatedStartTime": 1740870847123,
                "actualQueueTime": 1740869593202,
                "actualOnDeckTime": 1740870108428,
                "actualOnFieldTime": 1740870542123
            }
        },
        {
            "label": "Qualification 44",
            "status": "Queuing soon",
            "redTeams": [
                "2877",
                "4925",
                "9644"
            ],
            "blueTeams": [
                "3623",
                "501",
                "1721"
            ],
            "times": {
                "scheduledStartTime": 1740867600000,
                "estimatedQueueTime": 1740870109117,
                "estimatedOnDeckTime": 1740870542133,
                "estimatedOnFieldTime": 1740871030682,
                "estimatedStartTime": 1740871335682,
                "actualQueueTime": 1740870109117,
                "actualOnDeckTime": 1740870542133,
                "actualOnFieldTime": 1740871030682
            }
        },
        {
            "label": "Qualification 45",
            "status": "Queuing soon",
            "redTeams": [
                "7314",
                "1247",
                "5902"
            ],
            "blueTeams": [
                "1768",
                "9729",
                "8013"
            ],
            "times": {
                "scheduledStartTime": 1740868080000,
                "estimatedQueueTime": 1740870543695,
                "estimatedOnDeckTime": 1740871030690,
                "estimatedOnFieldTime": 1740871456368,
                "estimatedStartTime": 1740871761368,
                "actualQueueTime": 1740870543695,
                "actualOnDeckTime": 1740871030690,
                "actualOnFieldTime": 1740871456368
            }
        },
        {
            "label": "Qualification 46",
            "status": "Queuing soon",
            "redTeams": [
                "1277",
                "1761",
                "3467"
            ],
            "blueTeams": [
                "3566",
                "5962",
                "6328"
            ],
            "times": {
                "scheduledStartTime": 1740868560000,
                "estimatedQueueTime": 1740871031301,
                "estimatedOnDeckTime": 1740871456382,
                "estimatedOnFieldTime": 1740871909550,
                "estimatedStartTime": 1740872214550,
                "actualQueueTime": 1740871031301,
                "actualOnDeckTime": 1740871456382,
                "actualOnFieldTime": 1740871909550
            }
        },
        {
            "label": "Qualification 47",
            "status": "Queuing soon",
            "redTeams": [
                "6690",
                "4987",
                "1512"
            ],
            "blueTeams": [
                "811",
                "6201",
                "6620"
            ],
            "times": {
                "scheduledStartTime": 1740869040000,
                "estimatedQueueTime": 1740871456702,
                "estimatedOnDeckTime": 1740871909559,
                "estimatedOnFieldTime": 1740872446590,
                "estimatedStartTime": 1740872751590,
                "actualQueueTime": 1740871456702,
                "actualOnDeckTime": 1740871909559,
                "actualOnFieldTime": 1740872446590
            }
        },
        {
            "label": "Qualification 48",
            "status": "Queuing soon",
            "redTeams": [
                "319",
                "138",
                "8708"
            ],
            "blueTeams": [
                "4909",
                "97",
                "663"
            ],
            "times": {
                "scheduledStartTime": 1740869520000,
                "estimatedQueueTime": 1740871910714,
                "estimatedOnDeckTime": 1740872446601,
                "estimatedOnFieldTime": 1740873304668,
                "estimatedStartTime": 1740873609668,
                "actualQueueTime": 1740871910714,
                "actualOnDeckTime": 1740872446601,
                "actualOnFieldTime": 1740873304668
            }
        },
        {
            "label": "Qualification 49",
            "status": "Queuing soon",
            "redTeams": [
                "1247",
                "1768",
                "10156"
            ],
            "blueTeams": [
                "8410",
                "9644",
                "9729"
            ],
            "times": {
                "scheduledStartTime": 1740870000000,
                "estimatedQueueTime": 1740872447173,
                "estimatedOnDeckTime": 1740873304675,
                "estimatedOnFieldTime": 1740873704345,
                "estimatedStartTime": 1740874009345,
                "actualQueueTime": 1740872447173,
                "actualOnDeckTime": 1740873304675,
                "actualOnFieldTime": 1740873704345
            }
        },
        {
            "label": "Qualification 50",
            "status": "Queuing soon",
            "redTeams": [
                "1721",
                "5491",
                "3467"
            ],
            "blueTeams": [
                "2342",
                "4925",
                "7314"
            ],
            "times": {
                "scheduledStartTime": 1740870480000,
                "estimatedQueueTime": 1740873305112,
                "estimatedOnDeckTime": 1740873704353,
                "estimatedOnFieldTime": 1740874178689,
                "estimatedStartTime": 1740874483689,
                "actualQueueTime": 1740873305112,
                "actualOnDeckTime": 1740873704353,
                "actualOnFieldTime": 1740874178689
            }
        },
        {
            "label": "Qualification 51",
            "status": "Queuing soon",
            "redTeams": [
                "1761",
                "6690",
                "501"
            ],
            "blueTeams": [
                "9443",
                "1512",
                "3623"
            ],
            "times": {
                "scheduledStartTime": 1740870960000,
                "estimatedQueueTime": 1740873704993,
                "estimatedOnDeckTime": 1740874178697,
                "estimatedOnFieldTime": 1740874627713,
                "estimatedStartTime": 1740874932713,
                "actualQueueTime": 1740873704993,
                "actualOnDeckTime": 1740874178697,
                "actualOnFieldTime": 1740874627713
            }
        },
        {
            "label": "Qualification 52",
            "status": "Queuing soon",
            "redTeams": [
                "6620",
                "3566",
                "8708"
            ],
            "blueTeams": [
                "8013",
                "6328",
                "4987"
            ],
            "times": {
                "scheduledStartTime": 1740871440000,
                "estimatedQueueTime": 1740874179198,
                "estimatedOnDeckTime": 1740874627721,
                "estimatedOnFieldTime": 1740875372277,
                "estimatedStartTime": 1740875677277,
                "actualQueueTime": 1740874179198,
                "actualOnDeckTime": 1740874627721,
                "actualOnFieldTime": 1740875372277
            }
        },
        {
            "label": "Qualification 53",
            "status": "Queuing soon",
            "redTeams": [
                "319",
                "5962",
                "97"
            ],
            "blueTeams": [
                "2877",
                "5902",
                "6201"
            ],
            "times": {
                "scheduledStartTime": 1740871920000,
                "estimatedQueueTime": 1740874628186,
                "estimatedOnDeckTime": 1740875372289,
                "estimatedOnFieldTime": 1740875694709,
                "estimatedStartTime": 1740875999709,
                "actualQueueTime": 1740874628186,
                "actualOnDeckTime": 1740875372289,
                "actualOnFieldTime": 1740875694709
            }
        },
        {
            "label": "Qualification 54",
            "status": "Queuing soon",
            "redTeams": [
                "811",
                "1277",
                "4909"
            ],
            "blueTeams": [
                "1058",
                "138",
                "663"
            ],
            "times": {
                "scheduledStartTime": 1740872400000,
                "estimatedQueueTime": 1740875372851,
                "estimatedOnDeckTime": 1740875694719,
                "estimatedOnFieldTime": 1740876109504,
                "estimatedStartTime": 1740876414504,
                "actualQueueTime": 1740875372851,
                "actualOnDeckTime": 1740875694719,
                "actualOnFieldTime": 1740876109504
            }
        },
        {
            "label": "Qualification 55",
            "status": "Queuing soon",
            "redTeams": [
                "1721",
                "7314",
                "10156"
            ],
            "blueTeams": [
                "1761",
                "9443",
                "1247"
            ],
            "times": {
                "scheduledStartTime": 1740872880000,
                "estimatedQueueTime": 1740923047186,
                "estimatedOnDeckTime": 1740876109512,
                "estimatedOnFieldTime": 1740923540373,
                "estimatedStartTime": 1740923845373,
                "actualQueueTime": 1740923047186,
                "actualOnDeckTime": 1740876109512,
                "actualOnFieldTime": 1740923540373
            },
            "breakAfter": "End of day"
        },
        {
            "label": "Qualification 56",
            "status": "Queuing soon",
            "redTeams": [
                "1512",
                "8708",
                "1768"
            ],
            "blueTeams": [
                "9729",
                "4987",
                "501"
            ],
            "times": {
                "scheduledStartTime": 1740925200000,
                "estimatedQueueTime": 1740923540375,
                "estimatedOnDeckTime": 1740923572707,
                "estimatedOnFieldTime": 1740925512096,
                "estimatedStartTime": 1740925817096,
                "actualQueueTime": 1740923540375,
                "actualOnDeckTime": 1740923572707,
                "actualOnFieldTime": 1740925512096
            }
        },
        {
            "label": "Qualification 57",
            "status": "Queuing soon",
            "redTeams": [
                "6328",
                "3623",
                "5902"
            ],
            "blueTeams": [
                "3566",
                "8410",
                "319"
            ],
            "times": {
                "scheduledStartTime": 1740925680000,
                "estimatedQueueTime": 1740925043775,
                "estimatedOnDeckTime": 1740925512110,
                "estimatedOnFieldTime": 1740926023722,
                "estimatedStartTime": 1740926328722,
                "actualQueueTime": 1740925043775,
                "actualOnDeckTime": 1740925512110,
                "actualOnFieldTime": 1740926023722
            }
        },
        {
            "label": "Qualification 58",
            "status": "Queuing soon",
            "redTeams": [
                "2342",
                "811",
                "663"
            ],
            "blueTeams": [
                "4909",
                "6201",
                "3467"
            ],
            "times": {
                "scheduledStartTime": 1740926160000,
                "estimatedQueueTime": 1740925512876,
                "estimatedOnDeckTime": 1740926023734,
                "estimatedOnFieldTime": 1740926345487,
                "estimatedStartTime": 1740926650487,
                "actualQueueTime": 1740925512876,
                "actualOnDeckTime": 1740926023734,
                "actualOnFieldTime": 1740926345487
            }
        },
        {
            "label": "Qualification 59",
            "status": "Queuing soon",
            "redTeams": [
                "6620",
                "5491",
                "6690"
            ],
            "blueTeams": [
                "5962",
                "138",
                "9644"
            ],
            "times": {
                "scheduledStartTime": 1740926640000,
                "estimatedQueueTime": 1740926024477,
                "estimatedOnDeckTime": 1740926345499,
                "estimatedOnFieldTime": 1740926763333,
                "estimatedStartTime": 1740927068333,
                "actualQueueTime": 1740926024477,
                "actualOnDeckTime": 1740926345499,
                "actualOnFieldTime": 1740926763333
            }
        },
        {
            "label": "Qualification 60",
            "status": "Queuing soon",
            "redTeams": [
                "97",
                "2877",
                "1058"
            ],
            "blueTeams": [
                "1277",
                "4925",
                "8013"
            ],
            "times": {
                "scheduledStartTime": 1740927120000,
                "estimatedQueueTime": 1740926346239,
                "estimatedOnDeckTime": 1740926763348,
                "estimatedOnFieldTime": 1740927206364,
                "estimatedStartTime": 1740927511364,
                "actualQueueTime": 1740926346239,
                "actualOnDeckTime": 1740926763348,
                "actualOnFieldTime": 1740927206364
            }
        },
        {
            "label": "Qualification 61",
            "status": "Queuing soon",
            "redTeams": [
                "1512",
                "6328",
                "8410"
            ],
            "blueTeams": [
                "7314",
                "4987",
                "319"
            ],
            "times": {
                "scheduledStartTime": 1740927600000,
                "estimatedQueueTime": 1740926763770,
                "estimatedOnDeckTime": 1740927206374,
                "estimatedOnFieldTime": 1740927717229,
                "estimatedStartTime": 1740928022229,
                "actualQueueTime": 1740926763770,
                "actualOnDeckTime": 1740927206374,
                "actualOnFieldTime": 1740927717229
            }
        },
        {
            "label": "Qualification 62",
            "status": "Queuing soon",
            "redTeams": [
                "1247",
                "3566",
                "9729"
            ],
            "blueTeams": [
                "10156",
                "663",
                "501"
            ],
            "times": {
                "scheduledStartTime": 1740928080000,
                "estimatedQueueTime": 1740927207249,
                "estimatedOnDeckTime": 1740927717238,
                "estimatedOnFieldTime": 1740928259060,
                "estimatedStartTime": 1740928564060,
                "actualQueueTime": 1740927207249,
                "actualOnDeckTime": 1740927717238,
                "actualOnFieldTime": 1740928259060
            }
        },
        {
            "label": "Qualification 63",
            "status": "Queuing soon",
            "redTeams": [
                "9644",
                "811",
                "1768"
            ],
            "blueTeams": [
                "1721",
                "9443",
                "6620"
            ],
            "times": {
                "scheduledStartTime": 1740928560000,
                "estimatedQueueTime": 1740927717672,
                "estimatedOnDeckTime": 1740928259071,
                "estimatedOnFieldTime": 1740928687951,
                "estimatedStartTime": 1740928992951,
                "actualQueueTime": 1740927717672,
                "actualOnDeckTime": 1740928259071,
                "actualOnFieldTime": 1740928687951
            }
        },
        {
            "label": "Qualification 64",
            "status": "Queuing soon",
            "redTeams": [
                "5902",
                "1058",
                "1277"
            ],
            "blueTeams": [
                "3467",
                "6690",
                "2877"
            ],
            "times": {
                "scheduledStartTime": 1740929040000,
                "estimatedQueueTime": 1740928259639,
                "estimatedOnDeckTime": 1740928687961,
                "estimatedOnFieldTime": 1740929263025,
                "estimatedStartTime": 1740929568025,
                "actualQueueTime": 1740928259639,
                "actualOnDeckTime": 1740928687961,
                "actualOnFieldTime": 1740929263025
            }
        },
        {
            "label": "Qualification 65",
            "status": "Queuing soon",
            "redTeams": [
                "6201",
                "5962",
                "4925"
            ],
            "blueTeams": [
                "138",
                "2342",
                "1761"
            ],
            "times": {
                "scheduledStartTime": 1740929520000,
                "estimatedQueueTime": 1740928688607,
                "estimatedOnDeckTime": 1740929263313,
                "estimatedOnFieldTime": 1740929607943,
                "estimatedStartTime": 1740929912943,
                "actualQueueTime": 1740928688607,
                "actualOnDeckTime": 1740929263313,
                "actualOnFieldTime": 1740929607943
            }
        },
        {
            "label": "Qualification 66",
            "status": "Queuing soon",
            "redTeams": [
                "8013",
                "5491",
                "97"
            ],
            "blueTeams": [
                "8708",
                "3623",
                "4909"
            ],
            "times": {
                "scheduledStartTime": 1740930000000,
                "estimatedQueueTime": 1740929263919,
                "estimatedOnDeckTime": 1740929607952,
                "estimatedOnFieldTime": 1740930147754,
                "estimatedStartTime": 1740930452754,
                "actualQueueTime": 1740929263919,
                "actualOnDeckTime": 1740929607952,
                "actualOnFieldTime": 1740930147754
            }
        },
        {
            "label": "Qualification 67",
            "status": "Queuing soon",
            "redTeams": [
                "9644",
                "501",
                "319"
            ],
            "blueTeams": [
                "663",
                "7314",
                "6328"
            ],
            "times": {
                "scheduledStartTime": 1740930480000,
                "estimatedQueueTime": 1740929608292,
                "estimatedOnDeckTime": 1740930147765,
                "estimatedOnFieldTime": 1740930642329,
                "estimatedStartTime": 1740930947329,
                "actualQueueTime": 1740929608292,
                "actualOnDeckTime": 1740930147765,
                "actualOnFieldTime": 1740930642329
            }
        },
        {
            "label": "Qualification 68",
            "status": "Queuing soon",
            "redTeams": [
                "1768",
                "1277",
                "9443"
            ],
            "blueTeams": [
                "6620",
                "8410",
                "2877"
            ],
            "times": {
                "scheduledStartTime": 1740930960000,
                "estimatedQueueTime": 1740930148085,
                "estimatedOnDeckTime": 1740930642339,
                "estimatedOnFieldTime": 1740931055547,
                "estimatedStartTime": 1740931360547,
                "actualQueueTime": 1740930148085,
                "actualOnDeckTime": 1740930642339,
                "actualOnFieldTime": 1740931055547
            }
        },
        {
            "label": "Qualification 69",
            "status": "Queuing soon",
            "redTeams": [
                "3467",
                "9729",
                "10156"
            ],
            "blueTeams": [
                "6201",
                "6690",
                "1721"
            ],
            "times": {
                "scheduledStartTime": 1740931440000,
                "estimatedQueueTime": 1740930643055,
                "estimatedOnDeckTime": 1740931055556,
                "estimatedOnFieldTime": 1740931527225,
                "estimatedStartTime": 1740931832225,
                "actualQueueTime": 1740930643055,
                "actualOnDeckTime": 1740931055556,
                "actualOnFieldTime": 1740931527225
            }
        },
        {
            "label": "Qualification 70",
            "status": "Queuing soon",
            "redTeams": [
                "3566",
                "8013",
                "138"
            ],
            "blueTeams": [
                "8708",
                "2342",
                "4987"
            ],
            "times": {
                "scheduledStartTime": 1740931920000,
                "estimatedQueueTime": 1740931057571,
                "estimatedOnDeckTime": 1740931527234,
                "estimatedOnFieldTime": 1740931961309,
                "estimatedStartTime": 1740932266309,
                "actualQueueTime": 1740931057571,
                "actualOnDeckTime": 1740931527234,
                "actualOnFieldTime": 1740931961309
            }
        },
        {
            "label": "Qualification 71",
            "status": "Queuing soon",
            "redTeams": [
                "5491",
                "5902",
                "811"
            ],
            "blueTeams": [
                "3623",
                "1247",
                "97"
            ],
            "times": {
                "scheduledStartTime": 1740932400000,
                "estimatedQueueTime": 1740931527944,
                "estimatedOnDeckTime": 1740931961318,
                "estimatedOnFieldTime": 1740934069022,
                "estimatedStartTime": 1740934374022,
                "actualQueueTime": 1740931527944,
                "actualOnDeckTime": 1740931961318,
                "actualOnFieldTime": 1740934069022
            }
        },
        {
            "label": "Qualification 72",
            "status": "Queuing soon",
            "redTeams": [
                "1761",
                "4909",
                "5962"
            ],
            "blueTeams": [
                "4925",
                "1512",
                "1058"
            ],
            "times": {
                "scheduledStartTime": 1740932880000,
                "estimatedQueueTime": 1740931961826,
                "estimatedOnDeckTime": 1741571429097,
                "estimatedOnFieldTime": 1740934071550,
                "estimatedStartTime": 1740934376550,
                "actualQueueTime": 1740931961826,
                "actualOnFieldTime": 1740934071550
            },
            "breakAfter": "Alliance selection"
        },
        {
            "label": "Playoff 1",
            "status": "Queuing soon",
            "redTeams": [
                "3467",
                "6328",
                "9443"
            ],
            "blueTeams": [
                "8708",
                "8410",
                "501"
            ],
            "times": {
                "estimatedQueueTime": 1740937585833,
                "estimatedOnDeckTime": 1740937828169,
                "estimatedOnFieldTime": 1740938137659,
                "estimatedStartTime": 1740938497659,
                "actualQueueTime": 1740937585833,
                "actualOnDeckTime": 1740937828169,
                "actualOnFieldTime": 1740938137659
            }
        },
        {
            "label": "Playoff 2",
            "status": "Queuing soon",
            "redTeams": [
                "138",
                "2342",
                "6690"
            ],
            "blueTeams": [
                "8013",
                "1058",
                "1277"
            ],
            "times": {
                "estimatedQueueTime": 1740937832357,
                "estimatedOnDeckTime": 1740938137670,
                "estimatedOnFieldTime": 1740938819786,
                "estimatedStartTime": 1740939179786,
                "actualQueueTime": 1740937832357,
                "actualOnDeckTime": 1740938137670,
                "actualOnFieldTime": 1740938819786
            }
        },
        {
            "label": "Playoff 3",
            "status": "Queuing soon",
            "redTeams": [
                "4909",
                "2877",
                "1512"
            ],
            "blueTeams": [
                "4925",
                "5962",
                "319"
            ],
            "times": {
                "estimatedQueueTime": 1740938139035,
                "estimatedOnDeckTime": 1740938819799,
                "estimatedOnFieldTime": 1740939292449,
                "estimatedStartTime": 1740939652449,
                "actualQueueTime": 1740938139035,
                "actualOnDeckTime": 1740938819799,
                "actualOnFieldTime": 1740939292449
            }
        },
        {
            "label": "Playoff 4",
            "status": "Queuing soon",
            "redTeams": [
                "9644",
                "1768",
                "1721"
            ],
            "blueTeams": [
                "6201",
                "663",
                "3623"
            ],
            "times": {
                "estimatedQueueTime": 1740938820643,
                "estimatedOnDeckTime": 1740939292460,
                "estimatedOnFieldTime": 1740939781514,
                "estimatedStartTime": 1740940141514,
                "actualQueueTime": 1740938820643,
                "actualOnDeckTime": 1740939292460,
                "actualOnFieldTime": 1740939781514
            }
        },
        {
            "label": "Playoff 5",
            "status": "Queuing soon",
            "redTeams": [
                "8708",
                "8410",
                "501"
            ],
            "blueTeams": [
                "8013",
                "1058",
                "1277"
            ],
            "times": {
                "estimatedQueueTime": 1740939293126,
                "estimatedOnDeckTime": 1740939781525,
                "estimatedOnFieldTime": 1740940671796,
                "estimatedStartTime": 1740941031796,
                "actualQueueTime": 1740939293126,
                "actualOnDeckTime": 1740939781525,
                "actualOnFieldTime": 1740940671796
            }
        },
        {
            "label": "Playoff 6",
            "status": "Queuing soon",
            "redTeams": [
                "4925",
                "5962",
                "319"
            ],
            "blueTeams": [
                "6201",
                "663",
                "3623"
            ],
            "times": {
                "estimatedQueueTime": 1740940671805,
                "estimatedOnDeckTime": 1740940671805,
                "estimatedOnFieldTime": 1740941432174,
                "estimatedStartTime": 1740941792174,
                "actualQueueTime": 1740940671805,
                "actualOnDeckTime": 1740940671805,
                "actualOnFieldTime": 1740941432174
            }
        },
        {
            "label": "Playoff 7",
            "status": "Queuing soon",
            "redTeams": [
                "3467",
                "6328",
                "9443"
            ],
            "blueTeams": [
                "138",
                "2342",
                "6690"
            ],
            "times": {
                "estimatedQueueTime": 1740940672833,
                "estimatedOnDeckTime": 1740941432183,
                "estimatedOnFieldTime": 1740942262255,
                "estimatedStartTime": 1740942622255,
                "actualQueueTime": 1740940672833,
                "actualOnDeckTime": 1740941432183,
                "actualOnFieldTime": 1740942262255
            }
        },
        {
            "label": "Playoff 8",
            "status": "Queuing soon",
            "redTeams": [
                "4909",
                "2877",
                "1512"
            ],
            "blueTeams": [
                "9644",
                "1768",
                "1721"
            ],
            "times": {
                "estimatedQueueTime": 1740941432559,
                "estimatedOnDeckTime": 1740942262264,
                "estimatedOnFieldTime": 1740942780170,
                "estimatedStartTime": 1740943140170,
                "actualQueueTime": 1740941432559,
                "actualOnDeckTime": 1740942262264,
                "actualOnFieldTime": 1740942780170
            }
        },
        {
            "label": "Playoff 9",
            "status": "Queuing soon",
            "redTeams": [
                "3467",
                "6328",
                "9443"
            ],
            "blueTeams": [
                "6201",
                "663",
                "3623"
            ],
            "times": {
                "estimatedQueueTime": 1740942780183,
                "estimatedOnDeckTime": 1740942780183,
                "estimatedOnFieldTime": 1740943369948,
                "estimatedStartTime": 1740943729948,
                "actualQueueTime": 1740942780183,
                "actualOnDeckTime": 1740942780183,
                "actualOnFieldTime": 1740943369948
            }
        },
        {
            "label": "Playoff 10",
            "status": "Queuing soon",
            "redTeams": [
                "9644",
                "1768",
                "1721"
            ],
            "blueTeams": [
                "8708",
                "8410",
                "501"
            ],
            "times": {
                "estimatedQueueTime": 1740943369956,
                "estimatedOnDeckTime": 1740943369956,
                "estimatedOnFieldTime": 1740943877334,
                "estimatedStartTime": 1740944237334,
                "actualQueueTime": 1740943369956,
                "actualOnDeckTime": 1740943369956,
                "actualOnFieldTime": 1740943877334
            },
            "breakAfter": "Break"
        },
        {
            "label": "Playoff 11",
            "status": "Queuing soon",
            "redTeams": [
                "138",
                "2342",
                "6690"
            ],
            "blueTeams": [
                "4909",
                "2877",
                "1512"
            ],
            "times": {
                "estimatedQueueTime": 1740944417024,
                "estimatedOnDeckTime": 1740944417024,
                "estimatedOnFieldTime": 1740944883438,
                "estimatedStartTime": 1740945243438,
                "actualQueueTime": 1740944417024,
                "actualOnDeckTime": 1740944417024,
                "actualOnFieldTime": 1740944883438
            }
        },
        {
            "label": "Playoff 12",
            "status": "Queuing soon",
            "redTeams": [
                "9644",
                "1768",
                "1721"
            ],
            "blueTeams": [
                "3467",
                "6328",
                "9443"
            ],
            "times": {
                "estimatedQueueTime": 1740944417774,
                "estimatedOnDeckTime": 1740944883447,
                "estimatedOnFieldTime": 1740945249027,
                "estimatedStartTime": 1740945609027,
                "actualQueueTime": 1740944417774,
                "actualOnDeckTime": 1740944883447,
                "actualOnFieldTime": 1740945249027
            },
            "breakAfter": "Awards break"
        },
        {
            "label": "Playoff 13",
            "status": "Queuing soon",
            "redTeams": [
                "138",
                "2342",
                "6690"
            ],
            "blueTeams": [
                "3467",
                "6328",
                "9443"
            ],
            "times": {
                "estimatedQueueTime": 1740946225366,
                "estimatedOnDeckTime": 1740946225366,
                "estimatedOnFieldTime": 1740947071486,
                "estimatedStartTime": 1740947431486,
                "actualQueueTime": 1740946225366,
                "actualOnDeckTime": 1740946225366,
                "actualOnFieldTime": 1740947071486
            },
            "breakAfter": "Awards break"
        },
        {
            "label": "Final 1",
            "status": "Queuing soon",
            "redTeams": [
                "4909",
                "2877",
                "1512"
            ],
            "blueTeams": [
                "3467",
                "6328",
                "9443"
            ],
            "times": {
                "estimatedQueueTime": 1740947615386,
                "estimatedOnDeckTime": 1740947615386,
                "estimatedOnFieldTime": 1740948732219,
                "estimatedStartTime": 1740949092219,
                "actualQueueTime": 1740947615386,
                "actualOnDeckTime": 1740947615386,
                "actualOnFieldTime": 1740948732219
            },
            "breakAfter": "Awards break"
        },
        {
            "label": "Final 2",
            "status": "Queuing soon",
            "redTeams": [
                "4909",
                "2877",
                "1512"
            ],
            "blueTeams": [
                "3467",
                "6328",
                "9443"
            ],
            "times": {
                "estimatedQueueTime": 1740949432226,
                "estimatedOnDeckTime": 1740949432226,
                "estimatedOnFieldTime": 1740949465047,
                "estimatedStartTime": 1740949825047,
                "actualQueueTime": 1740949432226,
                "actualOnDeckTime": 1740949432226,
                "actualOnFieldTime": 1740949465047
            },
            "breakAfter": "Awards break"
        }
    ],
    "announcements": [],
    "partsRequests": []
};

export const getSimData = async (event: string): Promise<[teamYear: StatboticsTeamYear, matches: StatboticsTeamMatches, ranking: StatboticsTeamEvent, nexusEventStatus: NexusEventStatus, eventKey: string]> => {
    console.log("event", event);

    if (event == "SIM-RED") {
        return [
            team, matches, rankings, nexusStatusRed, "2025nhsal"
        ];
    }
    return [
        team, matches, rankings, nexusStatus, "2025nhsal"
    ];
}
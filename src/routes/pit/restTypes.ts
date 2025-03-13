export type StatboticsEvent = {
    key: string
    year: number
    name: string
    time: number
    country: string
    state: string
    district: string
    start_date: string
    end_date: string
    type: string
    week: number
    video: string
    status: string
    status_str: string
    num_teams: number
    current_match: number
    qual_matches: number
    epa: {
        max: number
        top_8: number
        top_24: number
        mean: number
        sd: number
    }
    metrics: {
        win_prob: {
            count: number
            conf: number
            acc: number
            mse: number
        }
        score_pred: {
            count: number
            rmse: number
            error: number
        }
        rp_pred: {
            count: number
            auto_rp: {
                error: number
                acc: number
            }
            coral_rp: {
                error: number
                acc: number
            }
            barge_rp: Array<{
                error: number
                acc: number
            }>
        }
    }
};

export type StatboticsTeamYear = {
    team: number
    year: number
    name: string
    country: string
    state: string
    district: string
    epa: {
        total_points: {
            mean: number
            sd: number
        }
        unitless: number
        norm: number
        conf: Array<number>
        breakdown: {
            total_points: number
            auto_points: number
            teleop_points: number
            endgame_points: number
            auto_rp: number
            coral_rp: number
            barge_rp: number
            tiebreaker_points: number
            auto_leave_points: number
            auto_coral: number
            auto_coral_points: number
            teleop_coral: number
            teleop_coral_points: number
            coral_l1: number
            coral_l2: number
            coral_l3: number
            coral_l4: number
            total_coral_points: number
            processor_algae: number
            processor_algae_points: number
            net_algae: number
            net_algae_points: number
            total_algae_points: number
            total_game_pieces: number
            barge_points: number
            rp_1: number
            rp_2: number
            rp_3: number
        }
        stats: {
            start: number
            pre_champs: number
            max: number
        }
        ranks: {
            total: {
                rank: number
                percentile: number
                team_count: number
            }
            country: {
                rank: number
                percentile: number
                team_count: number
            }
            state: {
                rank: number
                percentile: number
                team_count: number
            }
            district: {
                rank: number
                percentile: number
                team_count: number
            }
        }
    }
    record: {
        wins: number
        losses: number
        ties: number
        count: number
        winrate: number
    }
    district_points: number
    district_rank: number
    competing: {
        this_week: boolean
        next_event_key: string
        next_event_name: string
        next_event_week: number
    }
};

export type StatboticsTeamMatches = {
    key: string
    year: number
    event: string
    week: number
    elim: boolean
    comp_level: string
    set_number: number
    match_number: number
    match_name: string
    time: number
    predicted_time: number
    status: string
    video: any
    alliances: {
        red: {
            team_keys: Array<number>
            surrogate_team_keys: Array<any>
            dq_team_keys: Array<any>
        }
        blue: {
            team_keys: Array<number>
            surrogate_team_keys: Array<any>
            dq_team_keys: Array<any>
        }
    }
    pred: {
        winner: string
        red_win_prob: number
        red_score: number
        blue_score: number
        red_auto_rp: number
        blue_auto_rp: number
        red_coral_rp: number
        blue_coral_rp: number
        red_barge_rp: number
        blue_barge_rp: number
        red_rp_1: number
        blue_rp_1: number
        red_rp_2: number
        blue_rp_2: number
        red_rp_3: number
        blue_rp_3: number
    }
    result: {
        winner: string
        red_score: number
        blue_score: number
        red_no_foul: number
        blue_no_foul: number
        red_auto_points: number
        blue_auto_points: number
        red_teleop_points: number
        blue_teleop_points: number
        red_endgame_points: number
        blue_endgame_points: number
        red_auto_rp: boolean
        blue_auto_rp: boolean
        red_coral_rp: boolean
        blue_coral_rp: boolean
        red_barge_rp: boolean
        blue_barge_rp: boolean
        red_tiebreaker_points: number
        blue_tiebreaker_points: number
        red_auto_leave_points: number
        blue_auto_leave_points: number
        red_auto_coral: number
        blue_auto_coral: number
        red_auto_coral_points: number
        blue_auto_coral_points: number
        red_teleop_coral: number
        blue_teleop_coral: number
        red_teleop_coral_points: number
        blue_teleop_coral_points: number
        red_coral_l1: number
        blue_coral_l1: number
        red_coral_l2: number
        blue_coral_l2: number
        red_coral_l3: number
        blue_coral_l3: number
        red_coral_l4: number
        blue_coral_l4: number
        red_total_coral_points: number
        blue_total_coral_points: number
        red_processor_algae: number
        blue_processor_algae: number
        red_processor_algae_points: number
        blue_processor_algae_points: number
        red_net_algae: number
        blue_net_algae: number
        red_net_algae_points: number
        blue_net_algae_points: number
        red_total_algae_points: number
        blue_total_algae_points: number
        red_total_game_pieces: number
        blue_total_game_pieces: number
        red_barge_points: number
        blue_barge_points: number
        red_rp_1: boolean
        blue_rp_1: boolean
        red_rp_2: boolean
        blue_rp_2: boolean
        red_rp_3: boolean
        blue_rp_3: boolean
    }
}[];

export type StatboticsTeam = {
    team: number
    year: number
    event: string
    time: number
    team_name: string
    event_name: string
    country: string
    state: string
    district: string
    type: string
    week: number
    status: string
    first_event: boolean
    epa: {
        total_points: {
            mean: number
            sd: number
        }
        unitless: number
        norm: number
        conf: Array<number>
        breakdown: {
            total_points: number
            auto_points: number
            teleop_points: number
            endgame_points: number
            auto_rp: number
            coral_rp: number
            barge_rp: number
            tiebreaker_points: number
            auto_leave_points: number
            auto_coral: number
            auto_coral_points: number
            teleop_coral: number
            teleop_coral_points: number
            coral_l1: number
            coral_l2: number
            coral_l3: number
            coral_l4: number
            total_coral_points: number
            processor_algae: number
            processor_algae_points: number
            net_algae: number
            net_algae_points: number
            total_algae_points: number
            total_game_pieces: number
            barge_points: number
            rp_1: number
            rp_2: number
            rp_3: number
        }
        stats: {
            start: number
            pre_elim: number
            mean: number
            max: number
        }
    }
    record: {
        qual: {
            wins: number
            losses: number
            ties: number
            count: number
            winrate: number
            rps: number
            rps_per_match: number
            rank: number
            num_teams: number
        }
        elim: {
            wins: number
            losses: number
            ties: number
            count: number
            winrate: number
            alliance: any
            is_captain: any
        }
        total: {
            wins: number
            losses: number
            ties: number
            count: number
            winrate: number
        }
    }
    district_points: any
};

export type StatboticsTeamEvent = StatboticsTeam[];

export type NexusEventStatus = {
    eventKey: string
    dataAsOfTime: number
    nowQueuing: string
    announcements: Array<{ id: string, postedTime: number, announcement: string }>
    partsRequests: Array<{
        id: string
        postedTime: number
        parts: string
        requestedByTeam: string
    }>
    matches: Array<{
        label: string
        status: string
        redTeams: Array<string>
        blueTeams: Array<string>
        times: {
            scheduledStartTime: number
            estimatedQueueTime: number
            estimatedOnDeckTime: number
            estimatedOnFieldTime: number
            estimatedStartTime: number
            actualQueueTime: number
            actualOnDeckTime: number
            actualOnFieldTime: number
        }
    }>
}

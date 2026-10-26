import { ChatInputCommandInteraction } from "discord.js";
import error from "./layouts/error";

export const insufficientFunds = (
    interaction: ChatInputCommandInteraction,
    amount: number,
    emoji: string,
) =>
    error(
        interaction,
        "Insufficient Funds",
        `You need at least ${amount} ${emoji} to continue with this transaction.`,
    );

export const notAMember = (interaction: ChatInputCommandInteraction) =>
    error(
        interaction,
        "Not a Member",
        "The user you specified is not a member of this server!",
    );

export const financialActionToSelf = (
    interaction: ChatInputCommandInteraction,
) =>
    error(
        interaction,
        "Financial Action to Self",
        "You cannot perform a financial action on yourself!",
    );

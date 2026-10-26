import type {
    APIApplicationCommandBasicOption,
    ApplicationCommandOptionChoiceData,
    AutocompleteFocusedOption,
    ChatInputCommandInteraction,
    PermissionResolvable,
} from "discord.js";

export type RootCommand = {
    options?: APIApplicationCommandBasicOption[];
    description: string;
    autocompleteHandler?: (
        interaction: AutocompleteFocusedOption,
    ) => Promise<ApplicationCommandOptionChoiceData[]>;
    run: (interaction: ChatInputCommandInteraction) => Promise<any>;
};

export type ParentCommand = {
    description: string;
    subcommands: { [name: string]: RootCommand };
};

export type Command = {
    defaultPermissions?: PermissionResolvable;
} & (ParentCommand | RootCommand);

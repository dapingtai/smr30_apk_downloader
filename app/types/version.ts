export type VersionId = string;

export type ReleaseNoteType = 'feature' | 'improvement' | 'bug-fix';

export interface ReleaseNote {
    type: ReleaseNoteType;
    text: string;
}

export interface ReleaseNotes {
    title: string;
    notes: ReleaseNote[];
}

export interface VersionData {
    id: VersionId;
    label: string;
    isLatest: boolean;
    downloadUrl: string;
    releaseNotes: ReleaseNotes;
    requirements: string[];
    instructions: string[];
}

export interface VersionsData {
    versions: VersionData[];
}


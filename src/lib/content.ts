import { getCollection, type CollectionEntry } from 'astro:content';
import { withBase } from './paths';

export const PROJECT_COVER_PLACEHOLDER = '/images/projects/placeholder-project.webp';

/** Strip file extension from a content entry id for URL paths. */
export function entrySlug(id: string) {
  return id.replace(/\.md$/i, '');
}

export type ProjectEntry = CollectionEntry<'projects'>;
export type StageEntry = CollectionEntry<'stages'>;
export type RoleEntry = CollectionEntry<'roles'>;
export type DocumentEntry = CollectionEntry<'documents'>;

function sortProjects(a: ProjectEntry, b: ProjectEntry) {
  if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
  if (a.data.order !== b.data.order) return a.data.order - b.data.order;
  return a.data.title.localeCompare(b.data.title);
}

export async function getAllProjects() {
  const projects = await getCollection('projects');
  return projects.sort(sortProjects);
}

export async function getFeaturedProjects(limit = 6) {
  const projects = await getAllProjects();
  return projects.filter((p) => p.data.featured).slice(0, limit);
}

export async function getProjectsByStage(stageSlug: string) {
  const projects = await getAllProjects();
  return projects.filter((p) => p.data.stage === stageSlug);
}

export function projectSlug(project: ProjectEntry) {
  return entrySlug(project.id);
}

export function projectCoverSrc(coverImage?: string) {
  const path = (coverImage?.trim() || PROJECT_COVER_PLACEHOLDER).replace(/^\//, '');
  return withBase(path);
}

export function projectCoverAlt(project: ProjectEntry) {
  return project.data.coverAlt?.trim() || project.data.title;
}

export type ProjectMaterial = ProjectEntry['data']['materials'][number];

export function groupProjectMaterials(
  materials: ProjectMaterial[] | undefined,
  stages: StageEntry[]
) {
  if (!materials?.length) return [];

  const byStage = new Map<string, ProjectMaterial[]>();
  for (const item of materials) {
    const list = byStage.get(item.stage) ?? [];
    list.push(item);
    byStage.set(item.stage, list);
  }

  return stages
    .filter((stage) => byStage.has(stage.id))
    .map((stage) => ({
      stage,
      items: byStage.get(stage.id)!.sort((a, b) => a.order - b.order)
    }));
}

export function stageSlug(stage: StageEntry) {
  return entrySlug(stage.id);
}

export function roleSlug(role: RoleEntry) {
  return entrySlug(role.id);
}

export function documentSlug(doc: DocumentEntry) {
  return entrySlug(doc.id);
}

export async function getProjectBySlug(slug: string) {
  const projects = await getAllProjects();
  return projects.find((p) => p.id === slug);
}

export async function getAllStages() {
  const stages = await getCollection('stages');
  return stages.sort((a, b) => a.data.order - b.data.order);
}

export async function getStageBySlug(slug: string) {
  const stages = await getAllStages();
  return stages.find((s) => entrySlug(s.id) === slug);
}

export async function getAllRoles() {
  const roles = await getCollection('roles');
  return roles.sort((a, b) => a.data.order - b.data.order);
}

export async function getRoleBySlug(slug: string) {
  const roles = await getAllRoles();
  return roles.find((r) => entrySlug(r.id) === slug);
}

export async function getAllDocuments() {
  const documents = await getCollection('documents');
  return documents.sort((a, b) => {
    if (a.data.category !== b.data.category) {
      return a.data.category.localeCompare(b.data.category);
    }
    return a.data.order - b.data.order;
  });
}

export async function getDocumentBySlug(slug: string) {
  const documents = await getAllDocuments();
  return documents.find((d) => d.id === slug);
}

export function formatMonthYear(isoDate?: string) {
  if (!isoDate) return null;
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

export function getStageIndex(stageId: string, stages: StageEntry[]) {
  return stages.findIndex((s) => entrySlug(s.id) === stageId);
}

export type ResolvedContributorRole = {
  label: string;
  href?: string;
};

export function resolveNeededContributorRoles(
  neededRoles: string[],
  roles: RoleEntry[]
): ResolvedContributorRole[] {
  return neededRoles.map((label) => {
    const normalized = label.trim().toLowerCase();
    const slugGuess = normalized.replace(/\s+/g, '-');
    const match = roles.find(
      (role) =>
        role.data.title.trim().toLowerCase() === normalized || entrySlug(role.id) === slugGuess
    );

    return {
      label,
      href: match ? withBase(`roles/${roleSlug(match)}/`) : undefined
    };
  });
}

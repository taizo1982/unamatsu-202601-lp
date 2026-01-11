import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Map of icon names to Lucide icon components
 */
const iconMap: Record<string, LucideIcon> = LucideIcons as unknown as Record<
  string,
  LucideIcon
>;

/**
 * Get a Lucide icon component by name
 *
 * @param name - The name of the icon (e.g., "Heart", "UserPlus", "Calendar")
 * @returns The Lucide icon component, or a fallback circle icon if not found
 *
 * @example
 * ```tsx
 * const HeartIcon = getIconByName("Heart");
 * <HeartIcon className="w-6 h-6" />
 * ```
 */
export function getIconByName(name: string): LucideIcon {
  const icon = iconMap[name];
  if (icon) {
    return icon;
  }

  // Fallback to Circle icon if not found
  console.warn(`Icon "${name}" not found, using fallback`);
  return LucideIcons.Circle;
}

/**
 * Check if an icon name exists in Lucide icons
 */
export function isValidIconName(name: string): boolean {
  return name in iconMap;
}

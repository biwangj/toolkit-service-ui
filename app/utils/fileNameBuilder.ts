export const buildFileName = (
  type: string,
  projName: string,
  env: string
) => {

  if (type === "DOCX") {
    return `${projName}-UTSOF`;
  }

  if (type === "XLSX") {
    return `ITG-DevOps-Build-and-Deploy-Request-${projName}-${env}`;
  }

  return projName;
};
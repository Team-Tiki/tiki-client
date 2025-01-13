import { ListTag } from '@/page/dashboard/type/listTag';

export const getVisibleTags = (tags: ListTag[], maxWidth: number, tagGap: number): ListTag[] => {
  let totalWidth = 0;
  const visibleTags: ListTag[] = [];

  for (const tag of tags) {
    //임시 요소 생성
    const tempElement = document.createElement('span');
    tempElement.style.display = 'inline-block';
    tempElement.style.visibility = 'hidden';
    tempElement.style.position = 'absolute';
    tempElement.innerText = tag.name;

    //임시 요소 추가 후 너비 측정
    document.body.appendChild(tempElement);
    const tagWidth = tempElement.offsetWidth;
    document.body.removeChild(tempElement);

    //현재 태그까지 추가 후 너비 초과 검사
    if (totalWidth + tagWidth * 2 + tagGap > maxWidth) {
      if (tag.id == 0) {
        visibleTags.push(tag);
      }
      break;
    }
    totalWidth += tagWidth * 2 + tagGap;
    visibleTags.push(tag);
  }

  return visibleTags;
};

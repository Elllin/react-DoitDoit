const createStudy = {
  groupName: {
    placeholder: '주제가 잘 드러나는 이름이 좋아요.',
    description: '특수문자 불가 / 그룹 이름의 띄어쓰기는 자동 ‘ - ’ 으로 변경됩니다.',
    maxLength: 20,
  },
  introduction: {
    placeholder: '그룹 소개, 이 방의 규칙 등을 자유롭게 작성해주세요.',
    maxLength: 5000,
  },
  hashtag: {
    placeholder: 'ex) #열공하는그룹, #취업목표',
    description:
      '*그룹을 특색있게 나타내는 해시태그를 입력해주세요. 설정시 검색 확률이 높아져요! (최대 3개)',
    help:
      '그룹 해시태그 최대 3개, 태그당 최대 30자 제한, 쉼표 혹은 엔터를 입력하여 태그를 등록하세요. 등록된 태그를 클릭하면 삭제됩니다.',
  },
  locationOption: ['서울 전체', '경기 전체', '인천 전체'],
  categoryOption: ['대입 / 수능', '대학생 / 취업', '공무원 / 임용'],
};

export default createStudy;

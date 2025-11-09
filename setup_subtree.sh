#!/bin/bash
# 이전: #!/bin/sh -> 수정: #!/bin/bash

# =========================================================
# Subtree 구성 자동화 스크립트 (Bash 호환)
#
# 실행 전에 GITHUB_USER 변수를 본인의 GitHub 사용자 이름으로 변경하세요.
# 실행 명령어: bash setup_subtree_fixed.sh 또는 ./setup_subtree_fixed.sh
# =========================================================

# ---------------------------------------------------------
# 1. 변수 설정 (!!!여기를 수정하세요!!!)
# ---------------------------------------------------------
GITHUB_USER="chundung"
MAIN_REPO="the-nexus-codex"

# 하위 리포지토리 배열: [리포지토리 이름] [로컬 폴더 이름] [리모트 별칭]
# Bash 배열 문법은 유지하되, sh/dash 환경에서 실행 시 문제가 없도록 스크립트 헤더를 변경했습니다.
SUBTREE_CONFIG=(
    "log-tutorials-andromeda" "log-tutorials" "andromeda-remote"
    "dream-manifest-galaxy" "dream-manifest" "galaxy-remote"
    "data-knowledge-triangulum" "data-knowledge" "triangulum-remote"
    "gear-utility-pegasus" "gear-utility" "pegasus-remote"
)

# 기본 브랜치 이름
DEFAULT_BRANCH="main"

# ---------------------------------------------------------
# 2. 원격 리포지토리 생성
# ---------------------------------------------------------
echo "========================================================="
echo "1. Creating Remote Repositories on GitHub for $GITHUB_USER"
echo "========================================================="

# 메인 리포지토리 생성
echo "-> Creating Main Repo: $MAIN_REPO"
gh repo create "$MAIN_REPO" --public --add-readme -d "The central nexus for all project knowledge and code."

# 하위 리포지토리 생성
# NOTE: Bash 배열을 순회하기 위해 인덱스를 사용하는 고전적인 루프 대신,
# 배열의 전체 요소를 반복하는 Bash의 표준 for-loop를 사용했습니다.
for REPO_NAME_FULL in "${SUBTREE_CONFIG[@]}"; do
    # 배열 요소가 3개씩 묶여있으므로, gh repo create는 별도의 루프를 사용합니다.
    # 여기서는 리포지토리 이름만 추출하여 생성합니다.
    if [[ "$REPO_NAME_FULL" != *" "* ]]; then # 공백이 없는 리포지토리 이름만 처리
        echo "-> Creating Sub Repo: $REPO_NAME_FULL"
        gh repo create "$REPO_NAME_FULL" --public --add-readme -d "Sub-repository for: $REPO_NAME_FULL"
    fi
done

# ---------------------------------------------------------
# 3. 메인 리포지토리 클론 및 초기 설정
# ---------------------------------------------------------
echo "========================================================="
echo "2. Cloning and Initializing Main Repository"
echo "========================================================="
git clone "https://github.com/$GITHUB_USER/$MAIN_REPO.git"
cd "$MAIN_REPO" || exit

# ---------------------------------------------------------
# 4. Git Subtree Add 작업
# ---------------------------------------------------------
echo "========================================================="
echo "3. Adding Sub-repositories using Git Subtree"
echo "========================================================="

# 하위 리포지토리 구성 정보를 추출하여 처리합니다.
NUM_ELEMENTS=${#SUBTREE_CONFIG[@]}
for ((i=0; i<$NUM_ELEMENTS; i+=3)); do
    REPO_NAME="${SUBTREE_CONFIG[i]}"
    FOLDER_PATH="${SUBTREE_CONFIG[i+1]}"
    REMOTE_NAME="${SUBTREE_CONFIG[i+2]}"
    
    REPO_URL="https://github.com/$GITHUB_USER/$REPO_NAME.git"
    
    echo "Processing Subtree: $REPO_NAME (as $FOLDER_PATH)"
    
    # 1. 리모트 추가
    git remote add "$REMOTE_NAME" "$REPO_URL"
    echo "  - Remote added: $REMOTE_NAME"
    
    # 2. Subtree 추가
    git subtree add --prefix="$FOLDER_PATH" "$REMOTE_NAME" "$DEFAULT_BRANCH" --squash
    
    if [ $? -eq 0 ]; then
        echo "  - Subtree ADD successful: $FOLDER_PATH"
    else
        echo "  - ERROR: Subtree ADD failed for $REPO_NAME."
        exit 1
    fi
done

# ---------------------------------------------------------
# 5. 최종 통합 커밋 푸시
# ---------------------------------------------------------
echo "========================================================="
echo "4. Pushing Final Subtree Integration Commit to Origin"
echo "========================================================="
git push origin "$DEFAULT_BRANCH"
echo "Script completed successfully."
echo "You can now work in the '$MAIN_REPO' directory."
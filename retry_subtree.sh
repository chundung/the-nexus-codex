#!/bin/bash

# =========================================================
# Git Subtree 재시도 스크립트 (Cleanup & Retry)
#
# 이 스크립트는 이전에 생성된 로컬 클론 디렉토리(the-nexus-codex)
# 내에서 실행되어야 합니다.
# =========================================================

# ---------------------------------------------------------
# 1. 변수 설정 (!!!GITHUB_USER를 반드시 수정하세요!!!)
# ---------------------------------------------------------
GITHUB_USER="chundung"
MAIN_REPO="the-nexus-codex"
DEFAULT_BRANCH="main"

# 하위 리포지토리 설정 배열: [리포지토리 이름] [로컬 폴더 이름] [리모트 별칭]
SUBTREE_CONFIG=(
    "log-tutorials-andromeda" "log-tutorials" "andromeda-remote"
    "dream-manifest-galaxy" "dream-manifest" "galaxy-remote"
    "data-knowledge-triangulum" "data-knowledge" "triangulum-remote"
    "gear-utility-pegasus" "gear-utility" "pegasus-remote"
)

# ---------------------------------------------------------
# 2. 메인 리포지토리 디렉토리 이동
# ---------------------------------------------------------
echo "========================================================="
echo "1. Moving to Main Repository: $MAIN_REPO"
echo "========================================================="
if [ -d "$MAIN_REPO" ]; then
    cd "$MAIN_REPO" || exit
    echo "Current directory: $(pwd)"
else
    echo "ERROR: Directory '$MAIN_REPO' not found. Please run this script in the parent folder."
    exit 1
fi

# ---------------------------------------------------------
# 3. Subtree Add 재시도 (클린업 포함)
# ---------------------------------------------------------
echo "========================================================="
echo "2. Cleaning up and Retrying Git Subtree Add"
echo "========================================================="

NUM_ELEMENTS=${#SUBTREE_CONFIG[@]}
for ((i=0; i<$NUM_ELEMENTS; i+=3)); do
    REPO_NAME="${SUBTREE_CONFIG[i]}"
    FOLDER_PATH="${SUBTREE_CONFIG[i+1]}"
    REMOTE_NAME="${SUBTREE_CONFIG[i+2]}"
    REPO_URL="https://github.com/$GITHUB_USER/$REPO_NAME.git"
    
    echo "--- Processing: $REPO_NAME (as $FOLDER_PATH) ---"
    
    # 3-1. 리모트 존재 확인 및 추가
    if git remote get-url "$REMOTE_NAME" > /dev/null 2>&1; then
        echo "  - Remote '$REMOTE_NAME' already exists. Skipping remote add."
    else
        git remote add "$REMOTE_NAME" "$REPO_URL"
        echo "  - Remote added: $REMOTE_NAME"
    fi
    
    # 3-2. 실패로 인해 남았을 수 있는 로컬 폴더 정리 (매우 중요)
    if [ -d "$FOLDER_PATH" ]; then
        echo "  - Cleaning up potentially failed directory: $FOLDER_PATH"
        # 폴더 삭제 (임시 데이터 정리)
        rm -rf "$FOLDER_PATH"
        # git index에서 제거 (이전 실패의 잔재 제거)
        git rm -r --cached "$FOLDER_PATH" 2>/dev/null
    fi
    
    # 3-3. Git Subtree Add 재시도
    echo "  - Retrying Subtree ADD..."
    git subtree add --prefix="$FOLDER_PATH" "$REMOTE_NAME" "$DEFAULT_BRANCH" --squash
    
    if [ $? -eq 0 ]; then
        echo "  - Subtree ADD successful: $FOLDER_PATH"
    else
        echo "  - ERROR: Subtree ADD failed for $REPO_NAME. Check logs above."
        # 만약 이 단계에서도 실패한다면, 스크립트를 중단하지 않고 다음 리포지토리로 넘어갈 수 있도록
        # exit 1 대신 continue를 사용할 수 있으나, 명확한 오류 해결을 위해 중단하는 것을 권장합니다.
        exit 1 
    fi
done

# ---------------------------------------------------------
# 4. 최종 통합 커밋 푸시
# ---------------------------------------------------------
echo "========================================================="
echo "4. Pushing Final Subtree Integration Commit to Origin"
echo "========================================================="
git push origin "$DEFAULT_BRANCH"
echo "Script completed successfully."
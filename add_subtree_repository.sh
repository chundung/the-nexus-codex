#!/bin/bash

# =========================================================
# Subtree 리모트 재추가 스크립트
#
# 누락된 4개의 Subtree 원격 리포지토리를 HTTPS로 다시 추가합니다.
# 실행 전에 GITHUB_USER 변수를 반드시 수정하세요.
# =========================================================

# ---------------------------------------------------------
# 1. 변수 설정 (!!!GITHUB_USER를 반드시 수정하세요!!!)
# ---------------------------------------------------------
GITHUB_USER="chundung"
MAIN_REPO="the-nexus-codex"

# 하위 리포지토리 설정 배열: [리포지토리 이름] [리모트 별칭]
SUBTREE_REMOTES=(
    "log-tutorials-andromeda" "andromeda-remote"
    "dream-manifest-galaxy" "galaxy-remote"
    "data-knowledge-triangulum" "triangulum-remote"
    "gear-utility-pegasus" "pegasus-remote"
)

# ---------------------------------------------------------
# 2. 메인 리포지토리 디렉토리 확인
# ---------------------------------------------------------
if [ "$(basename "$(pwd)")" != "$MAIN_REPO" ]; then
    echo "ERROR: Please run this script inside the '$MAIN_REPO' directory."
    exit 1
fi
echo "Current directory: $(pwd). Adding remotes..."

# ---------------------------------------------------------
# 3. 누락된 리모트 추가
# ---------------------------------------------------------
echo "========================================================="
echo "Adding missing Subtree remotes..."
echo "========================================================="

NUM_ELEMENTS=${#SUBTREE_REMOTES[@]}
for ((i=0; i<NUM_ELEMENTS; i+=2)); do
    REPO_NAME="${SUBTREE_REMOTES[i]}"
    REMOTE_NAME="${SUBTREE_REMOTES[i+1]}"
    REPO_URL="https://github.com/$GITHUB_USER/$REPO_NAME.git"
    
    # 리모트가 이미 존재하는지 확인
    if git remote get-url "$REMOTE_NAME" > /dev/null 2>&1; then
        echo "✅ Remote '$REMOTE_NAME' already exists. Updating URL."
        git remote set-url "$REMOTE_NAME" "$REPO_URL"
    else
        echo "➕ Adding Remote '$REMOTE_NAME' -> $REPO_URL"
        git remote add "$REMOTE_NAME" "$REPO_URL"
    fi
done

echo "========================================================="
echo "Remotes successfully updated/added."
echo "========================================================="

# 4. 최종 확인
git remote -v
echo -e "\nNow retry the task command: task all-sync"

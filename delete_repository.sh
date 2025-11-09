#!/bin/bash

# =========================================================
# 불필요한 리포지토리 삭제 스크립트 (V2)
#
# 목적: Subtree 구성 중 잘못 생성된 8개의 리포지토리를 삭제합니다.
# 실행 명령어: bash delete_unused_repos_v2.sh
# =========================================================

# ---------------------------------------------------------
# 1. 변수 설정 (!!!GITHUB_USER를 반드시 수정하세요!!!)
# ---------------------------------------------------------
GITHUB_USER="chundung"

# 불필요하게 생성되어 삭제할 리포지토리 목록 (총 8개)
REPOS_TO_DELETE=(
    "pegasus-remote"
    "gear-utility"
    "triangulum-remote"
    "data-knowledge"
    "galaxy-remote"
    "dream-manifest"
    "andromeda-remote"
    "log-tutorials"
)

# ---------------------------------------------------------
# 2. 리포지토리 삭제
# ---------------------------------------------------------
echo "========================================================="
echo "1. Starting Deletion of Unused Remote Repositories"
echo "========================================================="
echo "User: $GITHUB_USER"
echo "Total Repositories to Delete: ${#REPOS_TO_DELETE[@]}"

for REPO in "${REPOS_TO_DELETE[@]}"; do
    FULL_REPO_NAME="$GITHUB_USER/$REPO"
    
    echo "--- Attempting to delete: $FULL_REPO_NAME ---"
    
    # gh repo delete 실행. --yes 옵션으로 확인 과정을 생략하고,
    # || true를 추가하여 삭제 실패 시에도 스크립트가 중단되지 않고 다음 리포지토리로 넘어가게 합니다.
    gh repo delete "$FULL_REPO_NAME" --yes
    
    # $?는 바로 직전 명령어의 종료 코드를 나타냅니다. (0이면 성공)
    if [ $? -eq 0 ]; then
        echo "✅ Successfully deleted: $FULL_REPO_NAME"
    else
        # 삭제가 실패한 경우, 리포지토리가 이미 존재하지 않거나 권한 문제일 수 있습니다.
        echo "❌ WARNING: Deletion failed for $FULL_REPO_NAME. (Possibly already deleted or doesn't exist)"
    fi
done

echo "========================================================="
echo "2. Deletion process completed. Please proceed to verification."
echo "========================================================="

# ---------------------------------------------------------
# 3. 최종 구성 확인 단계로 안내
# ---------------------------------------------------------

echo -e "\n========================================================="
echo "3. FINAL VERIFICATION STEPS"
echo "========================================================="

echo "A. 원격 리포지토리 최종 확인 (총 5개만 남아있어야 합니다):"
echo "   gh repo list $GITHUB_USER --limit 20"

echo -e "\nB. 로컬 Git Subtree 설정 확인:"
echo "   cd the-nexus-codex"
echo "   git remote -v (리모트가 origin 포함 5개인지 확인)"
echo "   git config --list | grep 'subtree' (subtree 설정 4개가 있는지 확인)"
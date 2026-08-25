import os
import shutil
import subprocess
import sys

# Force UTF-8 encoding for stdout
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

def main():
    root_dir = os.path.dirname(os.path.abspath(__file__))
    site_dir = os.path.join(root_dir, "site")
    
    print("[BUILD] Starting unified MkDocs build for manual-v1 and manual-v2...")

    # Ensure clean site directory
    if os.path.exists(site_dir):
        shutil.rmtree(site_dir)
    os.makedirs(site_dir, exist_ok=True)

    # 1. Build manual-v1
    v1_config = os.path.join(root_dir, "manual-v1", "mkdocs.yml")
    v1_out = os.path.join(site_dir, "manual-v1")
    print("[BUILD] Building manual-v1...")
    res_v1 = subprocess.run([sys.executable, "-m", "mkdocs", "build", "-f", v1_config, "-d", v1_out], cwd=root_dir)
    if res_v1.returncode != 0:
        print("[ERROR] Failed building manual-v1")
        sys.exit(res_v1.returncode)

    # 2. Build manual-v2
    v2_config = os.path.join(root_dir, "manual-v2", "mkdocs.yml")
    v2_out = os.path.join(site_dir, "manual-v2")
    print("[BUILD] Building manual-v2...")
    res_v2 = subprocess.run([sys.executable, "-m", "mkdocs", "build", "-f", v2_config, "-d", v2_out], cwd=root_dir)
    if res_v2.returncode != 0:
        print("[ERROR] Failed building manual-v2")
        sys.exit(res_v2.returncode)

    # 3. Copy index.html
    src_index = os.path.join(root_dir, "index.html")
    dst_index = os.path.join(site_dir, "index.html")
    if os.path.exists(src_index):
        shutil.copyfile(src_index, dst_index)
        print("[BUILD] Copied index.html to site/index.html")

    # 4. Copy functions folder if exists
    src_funcs = os.path.join(root_dir, "functions")
    dst_funcs = os.path.join(site_dir, "functions")
    if os.path.exists(src_funcs):
        if os.path.exists(dst_funcs):
            shutil.rmtree(dst_funcs)
        shutil.copytree(src_funcs, dst_funcs)
        print("[BUILD] Copied functions/ to site/functions/")

    print("[SUCCESS] Build completed successfully! Output in site/")

if __name__ == "__main__":
    main()
